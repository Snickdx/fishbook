importScripts('workbox-sw.prod.v2.1.2.js', 'js/lib.js', 'lib/dexie/dist/dexie.js');

const workboxSW = new WorkboxSW({clientsClaim: true});
workboxSW.precache([]);



self.addEventListener('sync', function(event) {
  // let endpoint = "https://lilys-aaf3d.firebaseio.com/vendorcatch";
  let endpoint = "https://snickdx.me/catch";
  
  event.waitUntil(new Promise(async (resolve, reject)=>{
    try{
      let db = Lib.initDB('CatchQueue', {catch: 'amt, bycatch, date, fish, lat, lng'});
      
      await db.catch
        .each (async function (catchObj) {
          Lib.fetchPost(endpoint, catchObj);
        }).then(()=>{
          console.log("Queued Events Sent!");
          resolve(db.catch.clear());
          self.registration.showNotification("Success", {
            body: "Your data was sent successfully in the background!",
            icon: "img/ionic.png",
            badge: "img/ionic.png"
          });
        });
    }catch(e){
      reject(e)
    }
  }));
  
});


self.addEventListener('push', function(event) {
  var title = 'Request Sent!';
  var body = 'You data was successfully sent!';
  var icon = 'img/ionic.png';
  var tag = 'simple-push-example-tag';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: body,
      icon: icon,
      tag: tag
    })
  );
});
