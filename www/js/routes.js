angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.demandMap', {
    url: '/demand-map',
    views: {
      'tab1': {
        templateUrl: 'templates/demandMap.html',
        controller: 'demandMapCtrl'
      }
    }
  })

  .state('tabsController.vendorMap', {
    url: '/Vendor-map',
    views: {
      'tab1': {
        templateUrl: 'templates/vendorMap.html',
        controller: 'vendorMapCtrl'
      }
    }
  })

  .state('tabsController.inventory', {
    url: '/inventory',
    views: {
      'tab4': {
        templateUrl: 'templates/inventory.html',
        controller: 'inventoryCtrl'
      }
    }
  })

  .state('tabsController.sales', {
    url: '/sales',
    views: {
      'tab2': {
        templateUrl: 'templates/sales.html',
        controller: 'salesCtrl'
      }
    }
  })

  .state('tabsController.catchLog', {
    url: '/catch',
    views: {
      'tab3': {
        templateUrl: 'templates/catchLog.html',
        controller: 'catchLogCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/demand-map')


});