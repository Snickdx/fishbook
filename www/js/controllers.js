angular.module('app.controllers', [])

.controller('demandMapCtrl', ['$scope', '$stateParams', 'NgMap', '$timeout','$http',
function ($scope, $stateParams, NgMap, $timeout, $http) {
  
  let marker = null;
  
  $scope.map = null;
  
  $scope.address = null;
  
  $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCB-bZyNYdVVERXOPnYz_9X9ZCOo2WbgUE";
  
  $scope.last = null;
  $scope.customers = [
    {hits:5, item:"King Fish",  position: [10.5353966,-61.3086329]},
    {hits:10, item:"Tuna", position: [10.165733, -61.020012]},
    {hits:40, item:"Tilapia",  position: [10.2613307,-61.415732]},
    {hits:1, item:"Tuna",  position: [10.2613307,-61.415732]},
    {hits:100, item:"Shark",  position:[10.4204783,-61.3274909]}
  ];
  
  $scope.selected = $scope.customers[0];
  
  $scope.getRadius = function(num) {
    return num * 100;
  };
  
  
  $scope.showDetail = function(e, customer) {
    $scope.selected = customer;
    $http({
      url:`https://maps.googleapis.com/maps/api/geocode/json?latlng=${customer.position[0]},${customer.position[1]}&sensor=true`,
      method:"GET"
    }).then(resp=>{
      // console.log(resp);
      if(resp.status === 200 && resp.data.results.length > 1) $scope.address = resp.data.results[0].formatted_address;
      $scope.map.showInfoWindow('foo-iw', customer.item);
    })
  };
  
  $scope.hideDetail = function() {
    $scope.map.hideInfoWindow('foo-iw');
  };
  
  NgMap.getMap().then(function(map) {
    
    let iterator = 0;
    $scope.map = map;
    // for (var i=0; i<$scope.customers.length; i++) {
    //   $timeout(function() {
    //     // add a marker this way does not sync. marker with <marker> tag
    //     let cust =$scope.customers[iterator++];
    //     console.log(cust);
    //     new google.maps.Marker({
    //       position: new google.maps.LatLng(cust.position[0], cust.position[1]),
    //       map: map,
    //       draggable: false,
    //       animation: google.maps.Animation.DROP
    //     });
    //   }, i * 200);
    // }
    
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(function (position) {
    //
    //     initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //     map.setCenter(initialLocation);
    //
    //     infoWindow = new google.maps.InfoWindow;
    //     infoWindow.setPosition(initialLocation);
    //     infoWindow.setContent('You Are Here');
    //     infoWindow.open(map);
    //
    //   });
    // }
    
  });
  //
  $scope.enableListener = (map) => {
    google.maps.event.addListener(map, 'click', function(event) {
      $scope.getAddress({ 'lat': event.latLng.lat(), 'lng': event.latLng.lng()});
    });
  };
  
  // $scope.getAddress = pos => {
  //   $http({
  //     url:`https://maps.googleapis.com/maps/api/geocode/json?latlng=${pos.lat},${pos.lng}&sensor=true`,
  //     method:"GET"
  //   }).then(resp=>{
  //     // console.log(resp);
  //     if(resp.status === 200 && resp.data.results.length > 1)
  //       $scope.address = resp.data.results[0];
  //   })
  // };
  //
  
}])

.controller('vendorMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('inventoryCtrl', ['$scope', '$stateParams', 'FishService',
function ($scope, $stateParams, FishService) {
  $scope.fishmap = {};
  
  $scope.vendor = "vend0001";//simulating auth
  
  FishService.getFishMap().then(map=>$scope.fishmap=map);
  
  $scope.inventory = {};
  
  FishService.getFishes($scope.vendor).then(obj=>{
     $scope.inventory = obj;
  });
  
  $scope.getFish = id =>{
    return $scope.fishmap[id];
  };
  
  $scope.getImage = fish=>{
    return $scope.fishmap[fish].img;
  };
  
  
}])

.controller('salesCtrl', ['$scope', '$stateParams', 'FishService',
function ($scope, $stateParams, FishService) {
  $scope.fishmap = {};
  
  $scope.vendor = "vend001";
  
  FishService.getFishMap().then(map=>$scope.fishmap=map);
  $scope.sales = FishService.getSales($scope.vendor);
  
  $scope.getFish = id =>{
    return $scope.fishmap[id];
  };
  
}])

.controller('catchLogCtrl', ['$scope', '$stateParams', '$ionicModal', 'FishService','IonicToast',
  function ($scope, $stateParams, $ionicModal, FishService, IonicToast) {
    $scope.online = truel;
  
    Lib.monitorNetworkState(()=>{
      $scope.online = true;
    }, ()=>{
      $scope.online = false;
    });
  
    $scope.vendor = "vend001";
    
    $scope.fishmap = {};
    
    $scope.db = Lib.initDB('CatchQueue', {catch: 'amt, bycatch, date, fish, lat, lng'});
    
    $scope.modal = null;
    
    FishService.getFishMap().then(map=>$scope.fishmap=map);
    
    $scope.catches = FishService.getCatches($scope.vendor);
    
    $scope.getImage = fish=>{
      return $scope.fishmap[fish].img;
    };
    
    $scope.newCatch = {
      fish:"",
      amt: "",
      bycatch:false
    };
    
    $scope.contacts = [
      { name: 'Gordon Freeman' },
      { name: 'Barney Calhoun' },
      { name: 'Lamarr the Headcrab' },
    ];
    
    $ionicModal.fromTemplateUrl('templates/addCatch.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    
    $scope.addCatch = async function() {
      let catchObj = {
        amt: $scope.newCatch.amt,
        fish:$scope.newCatch.fish,
        date: new Date().toLocaleDateString(),
        lat: 343.343,
        lng: 34.343,
        bycatch: $scope.newCatch.bycatch
      };
      
      if(!$scope.online){
  
        let reg = await navigator.serviceWorker.ready;
        $scope.db.events.add(newevent);
        reg.sync.register('EventSync');
        ionicToast.show("App is offline we'll send your request in the background", 'bottom', false, 4000);
      }else{
        FishService.addCatch($scope.vendor, catchObj);
      }
      $scope.modal.hide();
    };
    
  
}]);
