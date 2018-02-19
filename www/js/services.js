angular.module('app.services', [])

.factory('FB', ['$http', '$firebaseAuth', '$firebaseArray', '$firebaseObject', '$q', '$localStorage', 'ionicToast', function($http, $firebaseAuth, $firebaseArray, $firebaseObject, $q, $localStorage, ionicToast){
  
  const config = {
    apiKey: "AIzaSyAGiile0fX6rwsun5T9KB2NyPkUoIRubuE",
    authDomain: "lilys-aaf3d.firebaseapp.com",
    databaseURL: "https://lilys-aaf3d.firebaseio.com",
    projectId: "lilys-aaf3d",
    storageBucket: "lilys-aaf3d.appspot.com",
    messagingSenderId: "280483830227"
  };
  
  firebase.initializeApp(config);
  
  const msg = firebase.messaging();
  
  const db = firebase.database();
  
  const obj = {};
  
  //**********************************Service Worker****************************************
  
  obj.registerSW = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js', {scope:"."}).then(function(reg) {
        
        msg.useServiceWorker(reg);
        reg.onupdatefound = function() {
          
          let installingWorker = reg.installing;
          
          installingWorker.onstatechange = function() {
            switch (installingWorker.state) {
              case 'installed':
                if (navigator.serviceWorker.controller) {
                  ionicToast.show('New Content Available Please Refresh', 'bottom', false, 4000);
                  console.log('New or updated content is available.');
                } else {
                  console.log('Content is now available offline!');
                }
                break;
              case 'redundant':
                console.error('The installing service worker became redundant.');
                break;
            }
          };
        };
      }).catch(function(e) {
        console.error('Error during service worker registration:', e);
      });
    }
  };
  
  //***********************************Cloud Messaging***************************************
  
  obj.deleteToken = () => {
    obj.set('/subscriptions/web/'+$localStorage.savedToken, null);
    console.log('Notifications Disabled!');
    delete $localStorage.savedToken;
  };
  
  obj.saveToken = token => {
    $localStorage.savedToken = token;
    obj.set(`subscriptions/web/${token}`, true);
    
    // $http({
    // 		method: 'POST',
    // 		url: `https://iid.googleapis.com/iid/v1/${token}/rel/topics/web`,
    // 		headers: {
    // 			'Content-Type': 'application/json',
    // 			'Authorization':'key=AAAAQU4jmdM:APA91bHZ517PwFoB6XZa_Zl4u2Fwjvc6J_bz10ZqLiP9IBKPB5_8XjaDJe_XrJfoj1OJgY1Igs3Yy5156ODFTwDSwRGhmNFNCVpxjS9HIqgGYecUia-RyCcHhiCq05wUQu5wlkkRlm3j'
    // 		}
    // 	},
    // 	response => {
    // 		console.log('Registered for coupon notifications', response);
    // 	},
    // 	err => {
    // 		console.log(err);
    // 	}).then(resp=>{
    // 	console.log("Registered for coupon notifications", resp);
    // });
    
    console.log("Messaging token saved");
  };
  
  obj.isMsgEnabled = () => {
    return  $localStorage.savedToken != undefined;
  };
  
  obj.handleMessage = (handler) => {
    msg.onMessage(payload =>{
      console.log("Message Received: ", payload);
      handler(payload);
    });
  };
  
  msg.onTokenRefresh(() => {
    msg.getToken()
      .then(refreshedToken => {
        console.log("Token Refreshed");
        obj.deleteToken();
        obj.saveToken(refreshedToken);
      })
      .catch(err => {
        console.log('Unable to retrieve refreshed token ', err);
      });
  });
  
  obj.getToken = (success, failure) => {
    msg.getToken()
      .then(token => {success(token)})
      .catch(err => {failure(err)});
  };
  
  obj.enableMessaging = (success, failure) => {
    msg.requestPermission()
      .then(()=>{
        console.log('Notifications supported');
        obj.getToken(
          token => {
            obj.saveToken(token);
            if(success != undefined)success(token);
          },
          err => {
            console.log('Error getting token ', err);
            if(success != undefined)failure(err);
          }
        );
        
      })
      .catch(function(err) {
        console.log('Unable to get permission to notify.', err);
        if(success != undefined)failure(err);
      })
  };
  
  obj.checkMessaging = () => {
    return $localStorage.savedToken !== undefined;
  };
  
  
  //************************************* Database ******************************************
  
  obj.set = function(child, data){
    db.ref(child).set(data);
  };
  
  //returns promise
  obj.get = function(child){
    return db.ref(child).once("value").then(function(snapshot){
      return snapshot.val();
    });
  };
  
  obj.getList = function(child){
  
  };
  
  obj.onChange = function(child, type, callback){
    return db.ref(child).on(type, snapshot => {
      callback(snapshot);
    });
  };
  
  obj.getLastChild = (child, callback) => {
    db.ref(child).limitToLast(1).on("child_added", function(snapshot) {
      callback(snapshot.val());
    });
  };
  
  obj.update = function(child, obj){
    return db.ref(child).update(obj);
  };
  
  obj.getOrderedbyLast = function(child, prop, num){
    return db.ref(child).orderByChild(prop).limitToLast(num);
  };
  
  obj.pushKey = (child) => {
    return db.ref(child).push();
  };
  
  obj.push = function(child, data){
    return db.ref(child).push().set(data);
  };
  
  obj.getCollection = function(child){
    return $firebaseArray(db.ref(child));
  };
  
  obj.getObject = function(child){
    return $firebaseObject(db.ref(child));
  };
  
  return obj;
}])


.factory('FishService', ['FB', function(FB){
  let service = {};
  
  service.fishes = null;
  
  
  service.getFishMap = async ()=>{
    if(service.fishes === null){
      service.fishes = await FB.get('fish');
      return service.fishes;
    }else{
      return service.fishes;
    }
  };
  
  service.getFishes = vendor=>{
    return FB.get(`vendorfish/${vendor}`);
  };
  
  service.getFish = fishId=>{
    return FB.get(`fish/${fishId}`);
  };
  
  service.getSales = vendor =>{
    return  FB.getCollection(`vendorsales/${vendor}`);
  };
  
  service.getInventory = vendor => {};
  
  service.getCatches = vendor =>{
    return  FB.getCollection(`vendorcatch/${vendor}`);
  };
  
  service.getVendors = ()=>{};
  
  service.getDemand = ()=>{};
  
  service.addCatch = (vendor, fish)=>{
    return FB.push(`vendorcatch/${vendor}`, fish);
  };
  
  service.addInventory = (vendor, fish)=>{};
  
  service.addSale = (vendor, sale)=>{};
  
  
  return service;
}]);
