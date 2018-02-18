angular.module('app.controllers', [])

.controller('demandMapCtrl', ['$scope', '$stateParams', 'NgMap',
function ($scope, $stateParams, NgMap) {
  
  let marker = null;
  
  $scope.dropOff = {};
  
  $scope.address = null;
  
  $scope.last = null;
  
  NgMap.getMap().then(function(map) {
  
    $scope.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyCB-bZyNYdVVERXOPnYz_9X9ZCOo2WbgUE";
    
    $scope.enableListener(map);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
        
        infoWindow = new google.maps.InfoWindow;
        infoWindow.setPosition(initialLocation);
        infoWindow.setContent('You Are Here');
        infoWindow.open(map);
        
      });
    }
  });
  
  $scope.enableListener = (map) => {
    google.maps.event.addListener(map, 'click', function(event) {
      if (marker != null)marker.setMap(null);
      marker = new google.maps.Marker({
        position: event.latLng,
        label: "X",
        map: map
      });
      $scope.dropOff = { 'lat': event.latLng.lat(), 'lng': event.latLng.lng()};
      $scope.getAddress($scope.dropOff);
    });
  };

}])

.controller('vendorMapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('inventoryCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('salesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('catchLogCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
