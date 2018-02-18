importScripts('workbox-sw.prod.v2.1.2.js', 'js/lib.js', 'lib/dexie/dist/dexie.js');

const workboxSW = new WorkboxSW({clientsClaim: true});
workboxSW.precache([
  {
    "url": "css/ionic.app.css",
    "revision": "d69eb554f5dcbd24ee605b1a98f4f2dd"
  },
  {
    "url": "css/ionic.app.min.css",
    "revision": "1ba45a7fd992e1880bd6bcbb32d63bb5"
  },
  {
    "url": "css/style.css",
    "revision": "84a33cf00d95bc1e3617cc35262f7e94"
  },
  {
    "url": "fonts/montserrat/css/fonts.css",
    "revision": "560237bd4c963b8d6966930cf03db633"
  },
  {
    "url": "fonts/montserrat/fonts/Montserrat-700/Montserrat-700.ttf",
    "revision": "54ab0d0e5f22a208560c84dd4bf9cdf0"
  },
  {
    "url": "fonts/montserrat/fonts/Montserrat-700/Montserrat-700.woff",
    "revision": "6504417449b404a8f7f09b30d3692548"
  },
  {
    "url": "fonts/montserrat/fonts/Montserrat-700/Montserrat-700.woff2",
    "revision": "0ac7eee3b3fc35cf31235049fc306d52"
  },
  {
    "url": "fonts/montserrat/fonts/Montserrat-regular/Montserrat-regular.ttf",
    "revision": "a0b3f76e1df413be84036cc33ffeedfd"
  },
  {
    "url": "fonts/montserrat/fonts/Montserrat-regular/Montserrat-regular.woff",
    "revision": "85bae1cc86f76e89b945010c0492a6c9"
  },
  {
    "url": "fonts/montserrat/fonts/Montserrat-regular/Montserrat-regular.woff2",
    "revision": "8f489cac3eeca3f0e416620f3f5a92bf"
  },
  {
    "url": "img/ionic.png",
    "revision": "251ebf03b1c7889cf36cbcbcce8f689e"
  },
  {
    "url": "index.html",
    "revision": "ff2f0da43cfd83c42c30707b106d1413"
  },
  {
    "url": "lib/angular-animate/angular-animate.min.js.map",
    "revision": "fa891ad974a5cdafeae752a318b2038e"
  },
  {
    "url": "lib/angular-animate/bower.json",
    "revision": "698651ebcc4fb4c37195b8474a6c00db"
  },
  {
    "url": "lib/angular-animate/package.json",
    "revision": "191517f46089ce336a9119a1a9078c76"
  },
  {
    "url": "lib/angular-animate/README.md",
    "revision": "106f5afef87648c0e9218354fe62b01d"
  },
  {
    "url": "lib/angular-sanitize/angular-sanitize.min.js.map",
    "revision": "cd50ac53ed1f2ecceaffe33242f291e1"
  },
  {
    "url": "lib/angular-sanitize/bower.json",
    "revision": "37859cfc82cfa939519a19188df9cb7b"
  },
  {
    "url": "lib/angular-sanitize/LICENSE.md",
    "revision": "0d83982330e37f011a2cef9b15cb43aa"
  },
  {
    "url": "lib/angular-sanitize/package.json",
    "revision": "5b82f465fa2219c49848b394f738e90d"
  },
  {
    "url": "lib/angular-sanitize/README.md",
    "revision": "25dd9babfe0759995e6cc64e4b7c6195"
  },
  {
    "url": "lib/angular-ui-router/api/angular-ui-router.d.ts",
    "revision": "10d2cd545af44ed2dd8daa9a197a51df"
  },
  {
    "url": "lib/angular-ui-router/bower.json",
    "revision": "84f262f8f179cea182a9a7ba794c264e"
  },
  {
    "url": "lib/angular-ui-router/CHANGELOG.md",
    "revision": "07f6ecab898b72b41aae94feb1c28f10"
  },
  {
    "url": "lib/angular-ui-router/CONTRIBUTING.md",
    "revision": "7b49e14b08df38515fa0346dcfbb008c"
  },
  {
    "url": "lib/angular-ui-router/README.md",
    "revision": "1fb5bbee72ee388037c30f4f35686b24"
  },
  {
    "url": "lib/angular/angular-csp.css",
    "revision": "5d7bf1728c2447221cad6c6263557306"
  },
  {
    "url": "lib/angular/angular.min.js.gzip",
    "revision": "a249471257b60c7a5e5cbf9ca8dacd14"
  },
  {
    "url": "lib/angular/angular.min.js.map",
    "revision": "3e15eed1dfac2a34145567e9753f7f4e"
  },
  {
    "url": "lib/angular/bower.json",
    "revision": "bad5911084089afd8e70b67b97b35e62"
  },
  {
    "url": "lib/angular/LICENSE.md",
    "revision": "0d83982330e37f011a2cef9b15cb43aa"
  },
  {
    "url": "lib/angular/package.json",
    "revision": "772f0ac6a146452ec8215d5fff4122a4"
  },
  {
    "url": "lib/angular/README.md",
    "revision": "0d57148eaf38d58d1519a0e71c3f9a16"
  },
  {
    "url": "lib/angularfire/bower.json",
    "revision": "24e28852289208bf50ba7fc9cf9cfb06"
  },
  {
    "url": "lib/angularfire/README.md",
    "revision": "f1ceea65c20bd4bafd07ab1df1652494"
  },
  {
    "url": "lib/dexie/addons/Dexie.Observable/api.d.ts",
    "revision": "da77e54b80febc7c6cf9376b53a9da14"
  },
  {
    "url": "lib/dexie/addons/Dexie.Observable/dist/dexie-observable.d.ts",
    "revision": "e131300c7a1673eb1e068a2cfb876fa0"
  },
  {
    "url": "lib/dexie/addons/Dexie.Observable/dist/dexie-observable.es.js.map",
    "revision": "efd2d7adbd63cd5b826604dcdf361107"
  },
  {
    "url": "lib/dexie/addons/Dexie.Observable/dist/dexie-observable.js.map",
    "revision": "41697a8010a843ec061a66e502dc22e7"
  },
  {
    "url": "lib/dexie/addons/Dexie.Observable/dist/dexie-observable.min.js.map",
    "revision": "0760ff7da35d6b6d3891675df2efb7e5"
  },
  {
    "url": "lib/dexie/addons/Dexie.Observable/README.md",
    "revision": "5124a5318930b316f4c2ca3cc02bc3ee"
  },
  {
    "url": "lib/dexie/addons/Dexie.Syncable/api.d.ts",
    "revision": "445bea0773121306ac6de8188977676c"
  },
  {
    "url": "lib/dexie/addons/Dexie.Syncable/dist/dexie-syncable.d.ts",
    "revision": "59ecca4e30c38309a4607be68f232601"
  },
  {
    "url": "lib/dexie/addons/Dexie.Syncable/dist/dexie-syncable.es.js.map",
    "revision": "3ff671614a9dbd7307c22e79cc646de4"
  },
  {
    "url": "lib/dexie/addons/Dexie.Syncable/dist/dexie-syncable.js.map",
    "revision": "cbed0fb449dcabdcace8aea700c6f149"
  },
  {
    "url": "lib/dexie/addons/Dexie.Syncable/dist/dexie-syncable.min.js.map",
    "revision": "6be5d1046b7c070906ec77f29896dd0b"
  },
  {
    "url": "lib/dexie/addons/Dexie.Syncable/README.md",
    "revision": "1631d2cc17e18545bfe44781df491760"
  },
  {
    "url": "lib/dexie/bower.json",
    "revision": "61a8dddc8f037e7fb1b6394bdf47b52e"
  },
  {
    "url": "lib/dexie/CODE_OF_CONDUCT.md",
    "revision": "d48e7bdea35b71ffc08b26120748a0c6"
  },
  {
    "url": "lib/dexie/CONTRIBUTING.md",
    "revision": "89128041d55c90bd43abd87048cd727f"
  },
  {
    "url": "lib/dexie/dist/dexie.d.ts",
    "revision": "a4ed05efe674733bc82df9c7fe2367ff"
  },
  {
    "url": "lib/dexie/dist/dexie.es.js.map",
    "revision": "785f5ca8627e6cf7d72d88521d0e09f7"
  },
  {
    "url": "lib/dexie/dist/dexie.js.map",
    "revision": "b6eee0bb7c73db2061fca1a0d786d894"
  },
  {
    "url": "lib/dexie/dist/dexie.min.js.map",
    "revision": "c588fd5c3cc026c561c55651ae396dd1"
  },
  {
    "url": "lib/dexie/package.json",
    "revision": "f02cc06f06142f83efd8c7a0cb865315"
  },
  {
    "url": "lib/dexie/README.md",
    "revision": "98f88dc7643c2f9a7e247cd61307f65d"
  },
  {
    "url": "lib/firebase/bower.json",
    "revision": "0275fdc2764d5a483cf3a6fa0ebe4893"
  },
  {
    "url": "lib/firebase/firebase.d.ts",
    "revision": "70773efdab4cac4e577dcf1661edaec2"
  },
  {
    "url": "lib/firebase/README.md",
    "revision": "1515d17562e523ef3b30bb615aee2862"
  },
  {
    "url": "lib/ionic-toast/bower.json",
    "revision": "64c0a8b52063e6b2ac201efe3e0d0443"
  },
  {
    "url": "lib/ionic-toast/LICENSE.md",
    "revision": "e9309d02e16255adfd0935973e773347"
  },
  {
    "url": "lib/ionic-toast/package.json",
    "revision": "646c258bae73e44eacdac1afea2aaaa3"
  },
  {
    "url": "lib/ionic-toast/README.md",
    "revision": "9a09389a003401abb25cf11f7eeb3174"
  },
  {
    "url": "lib/ionic-toast/src/ionic-toast.css",
    "revision": "b72d7ea57fdfaef8d6205278170e41d4"
  },
  {
    "url": "lib/ionic/bower.json",
    "revision": "89155c477d8c16c4e3bdfa4fa727a1f5"
  },
  {
    "url": "lib/ionic/css/ionic.css",
    "revision": "1835baf222bae515552c33cf6dffab6b"
  },
  {
    "url": "lib/ionic/css/ionic.min.css",
    "revision": "893db9a1b633adb61ddf064e5314a509"
  },
  {
    "url": "lib/ionic/fonts/ionicons.eot",
    "revision": "2c2ae068be3b089e0a5b59abb1831550"
  },
  {
    "url": "lib/ionic/fonts/ionicons.svg",
    "revision": "621bd386841f74e0053cb8e67f8a0604"
  },
  {
    "url": "lib/ionic/fonts/ionicons.ttf",
    "revision": "24712f6c47821394fba7942fbb52c3b2"
  },
  {
    "url": "lib/ionic/fonts/ionicons.woff",
    "revision": "05acfdb568b3df49ad31355b19495d4a"
  },
  {
    "url": "lib/ionic/README.md",
    "revision": "8c3d9609038246e765bc74b004e57e4e"
  },
  {
    "url": "lib/ionic/scss/_action-sheet.scss",
    "revision": "d0c6449f31db02323aa6e7f56ef55e67"
  },
  {
    "url": "lib/ionic/scss/_animations.scss",
    "revision": "5596f74cb1ee03f9faf453ad4ee11807"
  },
  {
    "url": "lib/ionic/scss/_backdrop.scss",
    "revision": "7ff048e091b39f6615db62ee136ef040"
  },
  {
    "url": "lib/ionic/scss/_badge.scss",
    "revision": "c7b1b0e3049754fc22b45730e6c560fa"
  },
  {
    "url": "lib/ionic/scss/_bar.scss",
    "revision": "3a3e2b39cb46db25fafff9d68c3f062e"
  },
  {
    "url": "lib/ionic/scss/_button-bar.scss",
    "revision": "bf90c5d85e628b451f90b65f9c807f5a"
  },
  {
    "url": "lib/ionic/scss/_button.scss",
    "revision": "e365f13abd3c547f442fc1ac5385111f"
  },
  {
    "url": "lib/ionic/scss/_checkbox.scss",
    "revision": "89a0987dd24210f16863d7ba2c7312bd"
  },
  {
    "url": "lib/ionic/scss/_form.scss",
    "revision": "169f7a6e449aa9e1bed20a1f30887c97"
  },
  {
    "url": "lib/ionic/scss/_grid.scss",
    "revision": "9a87c565e397bb73b7f467726a63e01c"
  },
  {
    "url": "lib/ionic/scss/_items.scss",
    "revision": "711c0937e27c2ab5979f44e36ff31ac6"
  },
  {
    "url": "lib/ionic/scss/_list.scss",
    "revision": "0ab8daf57764aac25bf68aa0b0e6c776"
  },
  {
    "url": "lib/ionic/scss/_loading.scss",
    "revision": "9f23e266d43a432bbf07a8677d1d1592"
  },
  {
    "url": "lib/ionic/scss/_menu.scss",
    "revision": "c12d33c8bea78495b2571665e35cb192"
  },
  {
    "url": "lib/ionic/scss/_mixins.scss",
    "revision": "dfa91bbaa3f54a417ce1567c5b34dc13"
  },
  {
    "url": "lib/ionic/scss/_modal.scss",
    "revision": "38e8624ef28a495e7a01341915516bd1"
  },
  {
    "url": "lib/ionic/scss/_platform.scss",
    "revision": "db73214ac171e89a966c24d5320fe096"
  },
  {
    "url": "lib/ionic/scss/_popover.scss",
    "revision": "924a0474d4e58b3280e7d1ebf1938a55"
  },
  {
    "url": "lib/ionic/scss/_popup.scss",
    "revision": "988126e645408f1e5a270934520c20ac"
  },
  {
    "url": "lib/ionic/scss/_progress.scss",
    "revision": "19a19537d8e9483db7bde8a7febd43f6"
  },
  {
    "url": "lib/ionic/scss/_radio.scss",
    "revision": "9e5544332590f92c25ea065140610b03"
  },
  {
    "url": "lib/ionic/scss/_range.scss",
    "revision": "ae2eb0fc86bdcef56346885dcb76370f"
  },
  {
    "url": "lib/ionic/scss/_refresher.scss",
    "revision": "23c7b98a85caf376b414f4ed5a713831"
  },
  {
    "url": "lib/ionic/scss/_reset.scss",
    "revision": "319f0fb2d58da7fc89222752c5e527a4"
  },
  {
    "url": "lib/ionic/scss/_scaffolding.scss",
    "revision": "83d10a4997b12f655e847c886ae54dac"
  },
  {
    "url": "lib/ionic/scss/_select.scss",
    "revision": "7b40e394e01f33ebc89fcfc89f826410"
  },
  {
    "url": "lib/ionic/scss/_slide-box.scss",
    "revision": "ae10f39144dc0f6b5b24fb6e811e992a"
  },
  {
    "url": "lib/ionic/scss/_slides.scss",
    "revision": "504700ae567875f003c7fd1571a482e1"
  },
  {
    "url": "lib/ionic/scss/_spinner.scss",
    "revision": "472ae7eb35a68c22078b1d56b10f35be"
  },
  {
    "url": "lib/ionic/scss/_tabs.scss",
    "revision": "a8e939c50fd869edf42979129898a84e"
  },
  {
    "url": "lib/ionic/scss/_toggle.scss",
    "revision": "05e76b843e03e5df07342f8f4b352ba3"
  },
  {
    "url": "lib/ionic/scss/_transitions.scss",
    "revision": "c060678db2049bbca8833bf769d65dd1"
  },
  {
    "url": "lib/ionic/scss/_type.scss",
    "revision": "db602af625137bdc4d95b262d77a15c1"
  },
  {
    "url": "lib/ionic/scss/_util.scss",
    "revision": "c7af3ffdcc728e1c6f44061ed6120c15"
  },
  {
    "url": "lib/ionic/scss/_variables.scss",
    "revision": "aa0fd7fb8581ecd75a9efaa647b1dc50"
  },
  {
    "url": "lib/ionic/scss/ionic.scss",
    "revision": "a102a720475b3304d099fc3c94e7f619"
  },
  {
    "url": "lib/ionic/scss/ionicons/_ionicons-font.scss",
    "revision": "9a1734051fa60f52fdbdd74001b0f0e0"
  },
  {
    "url": "lib/ionic/scss/ionicons/_ionicons-icons.scss",
    "revision": "fcdab55027fe7da71f277ee58fad686a"
  },
  {
    "url": "lib/ionic/scss/ionicons/_ionicons-variables.scss",
    "revision": "0af49648c5756e4a96eb1eb70f016ee3"
  },
  {
    "url": "lib/ionic/scss/ionicons/ionicons.scss",
    "revision": "37204d759a9eb7bfc074034fd1bf95fb"
  },
  {
    "url": "lib/ionic/scss/tsconfig.json",
    "revision": "eb3bd36ec35e05eb37dae41e3617420f"
  },
  {
    "url": "lib/ionic/version.json",
    "revision": "2090c5e7ae8cdeeef68908193515cd37"
  },
  {
    "url": "lib/ngmap/bower.json",
    "revision": "0850d8cf062d2d4d38ee8e21370427da"
  },
  {
    "url": "lib/ngmap/build/docs/Attr2MapOptions.html",
    "revision": "ba8b4b964ce8814eb98cfc6cd2e898f1"
  },
  {
    "url": "lib/ngmap/build/docs/bicycling-layer.html",
    "revision": "d7fd31ce10750c17be507d3af03c3aef"
  },
  {
    "url": "lib/ngmap/build/docs/css/prettify-tomorrow.css",
    "revision": "8434d31b5ac374eef38afaa433e05c14"
  },
  {
    "url": "lib/ngmap/build/docs/css/prettify.css",
    "revision": "b3ee55d958b6badce341f16d1644e306"
  },
  {
    "url": "lib/ngmap/build/docs/css/site.css",
    "revision": "57eb94cbb5e98048e67969a204c5c0bf"
  },
  {
    "url": "lib/ngmap/build/docs/custom-control.html",
    "revision": "a4efa03211c981cc7c3ad2afe7658511"
  },
  {
    "url": "lib/ngmap/build/docs/directions.html",
    "revision": "01f73341ce3c90c58b6982a9aeae4b89"
  },
  {
    "url": "lib/ngmap/build/docs/drawing-manager.html",
    "revision": "87a13d8db30a1a50d4499ffeab229e33"
  },
  {
    "url": "lib/ngmap/build/docs/dynamic-maps-engine-layer.html",
    "revision": "06b7be3c365744906399753f04546d52"
  },
  {
    "url": "lib/ngmap/build/docs/fusion-tables-layer.html",
    "revision": "33bc2a64b4791eb6051b1781e6c1848f"
  },
  {
    "url": "lib/ngmap/build/docs/GeoCoder.html",
    "revision": "128fc55884da37046a4ecd271522ab04"
  },
  {
    "url": "lib/ngmap/build/docs/GoogleMapsApi.html",
    "revision": "195b97f045ec7b644b83e409a49e04f9"
  },
  {
    "url": "lib/ngmap/build/docs/heatmap-layer.html",
    "revision": "766fce2a9f59b96b0a09ab17aa9a9279"
  },
  {
    "url": "lib/ngmap/build/docs/index.html",
    "revision": "7f01456032440be4f8759144d8969138"
  },
  {
    "url": "lib/ngmap/build/docs/info-window.html",
    "revision": "41b3d47d1216e88758dede9b8d0ceb7e"
  },
  {
    "url": "lib/ngmap/build/docs/kml-layer.html",
    "revision": "3e5497fc77f80129eeffef58e1418a62"
  },
  {
    "url": "lib/ngmap/build/docs/map-data.html",
    "revision": "e045b40fd5b4c6969a3fdb8e691a5d70"
  },
  {
    "url": "lib/ngmap/build/docs/map-lazy-load.html",
    "revision": "ad8550d49d1da308ef5e9a97cd13facc"
  },
  {
    "url": "lib/ngmap/build/docs/map-type.html",
    "revision": "fdc7d5b34bb95631f89e7f468436b121"
  },
  {
    "url": "lib/ngmap/build/docs/maps-engine-layer.html",
    "revision": "920f95512fcae05d744b1b09b03d42d8"
  },
  {
    "url": "lib/ngmap/build/docs/marker.html",
    "revision": "8b54e637006162cba49cafbd3bcdfc15"
  },
  {
    "url": "lib/ngmap/build/docs/NavigatorGeolocation.html",
    "revision": "5f9cdbad524d8e8cbc21ac9cd272e1cf"
  },
  {
    "url": "lib/ngmap/build/docs/ngmap.custom-marker.html",
    "revision": "d41d13c7fda3752a7496dd3c37273ccd"
  },
  {
    "url": "lib/ngmap/build/docs/NgMap.html",
    "revision": "5115e71693921c0885b58f28640a5aff"
  },
  {
    "url": "lib/ngmap/build/docs/ngMap.ng-map.html",
    "revision": "d2bdf9d7a002223fab2263efa737b816"
  },
  {
    "url": "lib/ngmap/build/docs/NgMapPool.html",
    "revision": "69ad85ac3d4c68f5fb3ebf15c2a56e0a"
  },
  {
    "url": "lib/ngmap/build/docs/overlay-map-type.html",
    "revision": "051b75c8970b7232f61b85da3f886646"
  },
  {
    "url": "lib/ngmap/build/docs/places-auto-complete.html",
    "revision": "b3887084d96dc7a5a081337ef9536abb"
  },
  {
    "url": "lib/ngmap/build/docs/shape.html",
    "revision": "49de7f38f7e67344af2c6ad67d87778a"
  },
  {
    "url": "lib/ngmap/build/docs/source/Attr2MapOptions.html",
    "revision": "f19f12af22f6f7416534d584245f530c"
  },
  {
    "url": "lib/ngmap/build/docs/source/bicycling-layer.html",
    "revision": "13c99947ecab19e3357b0a760d5c4098"
  },
  {
    "url": "lib/ngmap/build/docs/source/custom-control.html",
    "revision": "0a6f6a83f76b5c8cf477ce0919210ccf"
  },
  {
    "url": "lib/ngmap/build/docs/source/directions.html",
    "revision": "22d3e763f4532d3e7721caa0dde3a489"
  },
  {
    "url": "lib/ngmap/build/docs/source/drawing-manager.html",
    "revision": "0c2a986119b5f68bfd334149c30944e8"
  },
  {
    "url": "lib/ngmap/build/docs/source/dynamic-maps-engine-layer.html",
    "revision": "3ce830c97cefc086db21cb56c845482f"
  },
  {
    "url": "lib/ngmap/build/docs/source/fusion-tables-layer.html",
    "revision": "c6914e98b1a0c2fc8be05a2bc3c13104"
  },
  {
    "url": "lib/ngmap/build/docs/source/GeoCoder.html",
    "revision": "05534536a9316312771db33eb269c5c7"
  },
  {
    "url": "lib/ngmap/build/docs/source/GoogleMapsApi.html",
    "revision": "421b4cbf08de8599a4d4ab24cd291e7f"
  },
  {
    "url": "lib/ngmap/build/docs/source/heatmap-layer.html",
    "revision": "80a2e2564ba433a83acce19edc09b89c"
  },
  {
    "url": "lib/ngmap/build/docs/source/info-window.html",
    "revision": "bbf2b63df722e3fc5c3fc57faceb3d98"
  },
  {
    "url": "lib/ngmap/build/docs/source/kml-layer.html",
    "revision": "dad90f1959d6e29d8d5722acf0698269"
  },
  {
    "url": "lib/ngmap/build/docs/source/map-data.html",
    "revision": "4dffa8c4cc3a87b51bbbf38643e24134"
  },
  {
    "url": "lib/ngmap/build/docs/source/map-lazy-load.html",
    "revision": "cb741d0dc22f11d682e7ecca230b6ef0"
  },
  {
    "url": "lib/ngmap/build/docs/source/map-type.html",
    "revision": "77b1034279232263f64e6f7da56009fd"
  },
  {
    "url": "lib/ngmap/build/docs/source/maps-engine-layer.html",
    "revision": "f0fb9940899a2e8250d7acf1c5cd10b3"
  },
  {
    "url": "lib/ngmap/build/docs/source/marker.html",
    "revision": "b9a63c8553c3e6d371ba4eab92e28d6e"
  },
  {
    "url": "lib/ngmap/build/docs/source/NavigatorGeolocation.html",
    "revision": "fb91af77c12e43825752a616c808fd42"
  },
  {
    "url": "lib/ngmap/build/docs/source/ngmap.custom-marker.html",
    "revision": "783cc8732d5d28230be9fa83eebb658b"
  },
  {
    "url": "lib/ngmap/build/docs/source/NgMap.html",
    "revision": "7db71d4ed7366a7388a4be85fec6455a"
  },
  {
    "url": "lib/ngmap/build/docs/source/ngMap.ng-map.html",
    "revision": "b85c5dbb82b9603624311f7a29a7ea6d"
  },
  {
    "url": "lib/ngmap/build/docs/source/NgMapPool.html",
    "revision": "ddef658132b3d43cfa97c2e0550e395a"
  },
  {
    "url": "lib/ngmap/build/docs/source/overlay-map-type.html",
    "revision": "310cca7b2bce4f70696ad3238b0b0682"
  },
  {
    "url": "lib/ngmap/build/docs/source/places-auto-complete.html",
    "revision": "76c438dae15c7ec4d32225d15f12bd6d"
  },
  {
    "url": "lib/ngmap/build/docs/source/shape.html",
    "revision": "e0a57fe8766ca0180fb1d9f085fad859"
  },
  {
    "url": "lib/ngmap/build/docs/source/streetview-panorama.html",
    "revision": "7755f424794988db5d11360ef126e364"
  },
  {
    "url": "lib/ngmap/build/docs/source/StreetView.html",
    "revision": "c93b68c3c4553bfeca71f79c48e0a09c"
  },
  {
    "url": "lib/ngmap/build/docs/source/traffic-layer.html",
    "revision": "296dab38c1c72510719d0772e460097a"
  },
  {
    "url": "lib/ngmap/build/docs/source/transit-layer.html",
    "revision": "81037785bff9d10d4949d01a67e508ee"
  },
  {
    "url": "lib/ngmap/build/docs/streetview-panorama.html",
    "revision": "904c69bcefbc6b7ab97c73d3b8f17e92"
  },
  {
    "url": "lib/ngmap/build/docs/StreetView.html",
    "revision": "42d799f846f428f844b3e815a428713b"
  },
  {
    "url": "lib/ngmap/build/docs/traffic-layer.html",
    "revision": "f18f22bae9985328b89acb26b6931d24"
  },
  {
    "url": "lib/ngmap/build/docs/transit-layer.html",
    "revision": "b7630211eb173c8c53e695c4dad9c80d"
  },
  {
    "url": "lib/ngmap/CHANGELOG.md",
    "revision": "3c480b52d0a18f3ad18b57540c932998"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/README.md",
    "revision": "cf62cf821abe58caa353e14c01fb378d"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/static/scripts/prettify/Apache-License-2.0.txt",
    "revision": "3b83ef96387f14655fc854ddc3c6bd57"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/static/styles/jsdoc-default.css",
    "revision": "6bcb555c8551a3d1fcaa39f7d35c54da"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/static/styles/prettify-jsdoc.css",
    "revision": "afd865ae34729b84684bec7c142552b1"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/static/styles/prettify-tomorrow.css",
    "revision": "9deeae5b1cb34e845a742fd5f84f91c5"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/container.tmpl",
    "revision": "7d1131dc0de2b8989a6b4f5370f850b4"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/details.tmpl",
    "revision": "53653530d613a9e93f5297826eff3984"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/example.tmpl",
    "revision": "b638a98d7bf6275fb5c41b72c48486e1"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/examples.tmpl",
    "revision": "e2406b14b29a24c66122a84ab6022dd8"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/exceptions.tmpl",
    "revision": "870ae28299047dfb7f89da94cfbedd0c"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/layout.tmpl",
    "revision": "f6feef69f6a8fc59dd72d6bb40ec7e8e"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/mainpage.tmpl",
    "revision": "857ecabce7b0381a740eb4517224f80a"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/members.tmpl",
    "revision": "a6822d2141d45e74509610ca837181f7"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/method.tmpl",
    "revision": "7d9d7a0a503adbd56744d2a7d866333e"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/params.tmpl",
    "revision": "fe831b8adb40313b77ab7ffdd1a307f5"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/properties.tmpl",
    "revision": "126894cc413741ed28134834b93e58d6"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/returns.tmpl",
    "revision": "84fef8ddabce03318325e6e84fac3fe0"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/source.tmpl",
    "revision": "98ce703f76b0e203b0d88c439a01dda1"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/tutorial.tmpl",
    "revision": "812e1828c0389bde7d1eec6c041d19af"
  },
  {
    "url": "lib/ngmap/config/jsdoc/template/tmpl/type.tmpl",
    "revision": "8f07b472c6253695054c1b1a021c2a64"
  },
  {
    "url": "lib/ngmap/CONTRIBUTORS.md",
    "revision": "b1613461387cecbe6cc3d7891f059782"
  },
  {
    "url": "lib/ngmap/favicon.ico",
    "revision": "338abbb5ea8d80b9869555eca253d49d"
  },
  {
    "url": "lib/ngmap/ISSUE_TEMPLATE.md",
    "revision": "8d4451444be60c56899e3cef191311b0"
  },
  {
    "url": "lib/ngmap/package.json",
    "revision": "bba2df5379efe73d8550be3a4b197aea"
  },
  {
    "url": "lib/ngmap/README.md",
    "revision": "f667552e15a4a1ce27efeb3d98f85682"
  },
  {
    "url": "lib/ngmap/road-trip.md",
    "revision": "c64b8a55278cd958a4ef106039098538"
  },
  {
    "url": "lib/ngmap/testapp/aerial-rotate.html",
    "revision": "432b1bb91484fc481164f0d1caf2217d"
  },
  {
    "url": "lib/ngmap/testapp/aerial-simple.html",
    "revision": "4ccc704a727e87bf5b9b082f91adf6fb"
  },
  {
    "url": "lib/ngmap/testapp/all-examples.html",
    "revision": "4d73bf78e73c72c2a50655bfd4b89e3b"
  },
  {
    "url": "lib/ngmap/testapp/all-examples.json",
    "revision": "47498fb64995af901194ee476bfe7023"
  },
  {
    "url": "lib/ngmap/testapp/circle-simple.html",
    "revision": "ea340d6e59a66c5be695c8a7c9f6c927"
  },
  {
    "url": "lib/ngmap/testapp/control-custom-state.html",
    "revision": "bc000863a2928fe3f5b20f750cf2116e"
  },
  {
    "url": "lib/ngmap/testapp/control-custom.html",
    "revision": "3ffab1f6d230af2ddf83496d5b559b7f"
  },
  {
    "url": "lib/ngmap/testapp/control-disableUI.html",
    "revision": "a5e9b9685f6c782d0d36470b71ad750b"
  },
  {
    "url": "lib/ngmap/testapp/control-options.html",
    "revision": "8ab1aae5d51190efb6216ddcd1e54ccc"
  },
  {
    "url": "lib/ngmap/testapp/control-positioning.html",
    "revision": "c7227d4b5e6a84768c89af8584ab8bfc"
  },
  {
    "url": "lib/ngmap/testapp/control-simple.html",
    "revision": "542134a450da71fe962a8e2433f1e150"
  },
  {
    "url": "lib/ngmap/testapp/custom-control.html",
    "revision": "7bd8b987e7995d2cd17296afedc31375"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker-2.html",
    "revision": "ae778c8a8203df6a6ac1aa1d16bbff1d"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker-clusterer.html",
    "revision": "721526cde613dff2cba4a40d3e090e0e"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker-custom-style.html",
    "revision": "29f71e87846f8a4d9a8e2ab12e393c67"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker-ng-repeat.html",
    "revision": "6c0b40df432f985b2df3b3b94b69e6b0"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker-two-way-binding.html",
    "revision": "072f9bdaaa0c41d8ef15944c2a66b927"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker.css",
    "revision": "2f737dec4e8880e45c474d0ee72e809e"
  },
  {
    "url": "lib/ngmap/testapp/custom-marker.html",
    "revision": "0f6f395bbd19687d22929bc6c3dad1f6"
  },
  {
    "url": "lib/ngmap/testapp/directions-with-current-location.html",
    "revision": "31170781d8a1cc361af2de7af35b07c8"
  },
  {
    "url": "lib/ngmap/testapp/directions-with-custom-marker.html",
    "revision": "1fc56939a5edd454d3ddf3b2bdf682b5"
  },
  {
    "url": "lib/ngmap/testapp/directions-with-ng-repeat-panels.html",
    "revision": "f2e6597c83a39e997a5a3e548da47f29"
  },
  {
    "url": "lib/ngmap/testapp/directions.html",
    "revision": "5b84bbac2b571bfc8e595bb312c13349"
  },
  {
    "url": "lib/ngmap/testapp/directions2.html",
    "revision": "1983aecadf9167a3983e49d582cdd018"
  },
  {
    "url": "lib/ngmap/testapp/drawing-manager.html",
    "revision": "71ef0370c9278c618fc59d5d438553bc"
  },
  {
    "url": "lib/ngmap/testapp/event-arguments.html",
    "revision": "099355062bac7c0b79c050b96fa07d33"
  },
  {
    "url": "lib/ngmap/testapp/event-domlistener.html",
    "revision": "5f8cf98b71071c645d1cec5f12d066c5"
  },
  {
    "url": "lib/ngmap/testapp/event-properties.html",
    "revision": "d7655823d885e456ee7c9d6b81e0294a"
  },
  {
    "url": "lib/ngmap/testapp/event-simple.html",
    "revision": "f3fbcc15abdcd22b66cea61d1010177d"
  },
  {
    "url": "lib/ngmap/testapp/events.html",
    "revision": "160e968a0baa0c140c267139a271a637"
  },
  {
    "url": "lib/ngmap/testapp/geojson.html",
    "revision": "d8062e426495c71d0d61e02ef8ecfd8a"
  },
  {
    "url": "lib/ngmap/testapp/groundoverlay-simple.html",
    "revision": "e1ac804811e497f3e30a7c33b67b96e0"
  },
  {
    "url": "lib/ngmap/testapp/heatmap.json",
    "revision": "e83c7bbe0d13751432e6b1a3c049295a"
  },
  {
    "url": "lib/ngmap/testapp/icon-complex.html",
    "revision": "7cda62a634bc00652d7d00ce65912f0e"
  },
  {
    "url": "lib/ngmap/testapp/icon-simple.html",
    "revision": "caf076c12f430919911830d0a9350aa7"
  },
  {
    "url": "lib/ngmap/testapp/images/beachflag.png",
    "revision": "8f33bab9b0c154462489b35140f29fae"
  },
  {
    "url": "lib/ngmap/testapp/images/spinner.gif",
    "revision": "4152eb447e3e756250b29a0b19b2bbf9"
  },
  {
    "url": "lib/ngmap/testapp/infowindow_compile.html",
    "revision": "1ba65cacd7d8007768c62cb8f05e2dfe"
  },
  {
    "url": "lib/ngmap/testapp/infowindow_geolookup.html",
    "revision": "00500df0801b00d2a558f3a8f0d166b2"
  },
  {
    "url": "lib/ngmap/testapp/infowindow_ng_click.html",
    "revision": "869507a90327af25161fb3b82add3c82"
  },
  {
    "url": "lib/ngmap/testapp/infowindow-simple-max.html",
    "revision": "a99f3354ab16ae952a6c61a87a0ac563"
  },
  {
    "url": "lib/ngmap/testapp/infowindow-simple.html",
    "revision": "569905ad9e52f8a08d193066cfdc44fe"
  },
  {
    "url": "lib/ngmap/testapp/infowindow-template.html",
    "revision": "7ae860dc0ac661d53a02b3d7fc2e5f04"
  },
  {
    "url": "lib/ngmap/testapp/layer-bicycling.html",
    "revision": "8c23ed673c6e81553e361295c9307a95"
  },
  {
    "url": "lib/ngmap/testapp/layer-data-dynamic.html",
    "revision": "234ba2718d23ac1ae397463ce31a8143"
  },
  {
    "url": "lib/ngmap/testapp/layer-data-quakes-advanced.html",
    "revision": "53e13ef02414035b61afa811a21df71d"
  },
  {
    "url": "lib/ngmap/testapp/layer-data-quakes-default.html",
    "revision": "a3ab2417d2e6c0c6a74f5c0222c8b988"
  },
  {
    "url": "lib/ngmap/testapp/layer-data-quakes-simple.html",
    "revision": "a7e1bcf6b9d829c1359145086ca7a4c2"
  },
  {
    "url": "lib/ngmap/testapp/layer-data-simple.html",
    "revision": "72266218ad18cb8329256ddc850220d4"
  },
  {
    "url": "lib/ngmap/testapp/layer-data-style.html",
    "revision": "6a6bd2e9a5fee64adf74563d77423d47"
  },
  {
    "url": "lib/ngmap/testapp/layer-dynamicmapsengine.html",
    "revision": "3f87aabe656ee9920d1a0d76f3530a8e"
  },
  {
    "url": "lib/ngmap/testapp/layer-fusiontables-heatmap.html",
    "revision": "381c18916e8195cf8b923d2a91a88309"
  },
  {
    "url": "lib/ngmap/testapp/layer-fusiontables-query.html",
    "revision": "d4be2cfd27e66cfbfdcc3587e5e79caf"
  },
  {
    "url": "lib/ngmap/testapp/layer-fusiontables-simple.html",
    "revision": "1d88f1bcb1ef9be77b10ff9d6804ad78"
  },
  {
    "url": "lib/ngmap/testapp/layer-fusiontables-styling.html",
    "revision": "7ee8bc00217735eeac4b2020b2e26899"
  },
  {
    "url": "lib/ngmap/testapp/layer-georss.html",
    "revision": "591c1d7197a136c637d92077dbe279e5"
  },
  {
    "url": "lib/ngmap/testapp/layer-heatmap.html",
    "revision": "db4000dca27ba64996c370f61db0785d"
  },
  {
    "url": "lib/ngmap/testapp/layer-kml-features.html",
    "revision": "4afd2579576fd909254b9a72093cfc7b"
  },
  {
    "url": "lib/ngmap/testapp/layer-kml.html",
    "revision": "985c4bb10a32cc4f223ee83de441fdca"
  },
  {
    "url": "lib/ngmap/testapp/layer-mapsengine.html",
    "revision": "24872809673f2ff8a322c5f6324a69dc"
  },
  {
    "url": "lib/ngmap/testapp/layer-style-event.html",
    "revision": "e09a2a7b89125f0d9bbd8bce7259fc3b"
  },
  {
    "url": "lib/ngmap/testapp/layer-traffic.html",
    "revision": "fb96f8e28394b235c956f06ffc755ad4"
  },
  {
    "url": "lib/ngmap/testapp/layer-transit.html",
    "revision": "ea922bc628cb279424a9cf016847937c"
  },
  {
    "url": "lib/ngmap/testapp/lib/bootstrap.min.css",
    "revision": "323f5dbc2c30537175dad260d75cf7ad"
  },
  {
    "url": "lib/ngmap/testapp/lib/prettify-tomorrow-night.css",
    "revision": "50473d612d50cd0979ac1868a8fe6a72"
  },
  {
    "url": "lib/ngmap/testapp/lib/prettify-tomorrow.css",
    "revision": "8434d31b5ac374eef38afaa433e05c14"
  },
  {
    "url": "lib/ngmap/testapp/map_app.html",
    "revision": "0b676eacc020b5d36241103cd3cda153"
  },
  {
    "url": "lib/ngmap/testapp/map_control.html",
    "revision": "90ad3cf8f31ee46f473d7315e2d8e8b7"
  },
  {
    "url": "lib/ngmap/testapp/map_events.html",
    "revision": "61cdd9bb1ca31c9d3c8ebde95d004f61"
  },
  {
    "url": "lib/ngmap/testapp/map_fit_bounds.html",
    "revision": "d314e25b2189ce7c504f7c2d97b50099"
  },
  {
    "url": "lib/ngmap/testapp/map_geo_fallback_center.html",
    "revision": "6ee489097b1821d35b60e19195324d95"
  },
  {
    "url": "lib/ngmap/testapp/map_no_default_style.html",
    "revision": "9fb504a188edc614df0961afef80a569"
  },
  {
    "url": "lib/ngmap/testapp/map_options.html",
    "revision": "f43531eee93da96e7bda30eb73a6e254"
  },
  {
    "url": "lib/ngmap/testapp/map_with_address.html",
    "revision": "64abce3f8fcb0ad8857bdbf34f3781e2"
  },
  {
    "url": "lib/ngmap/testapp/map_with_current_position.html",
    "revision": "22121d0f4a18bbe4a6526b8291b710ac"
  },
  {
    "url": "lib/ngmap/testapp/map_with_dynamic_address.html",
    "revision": "ad92dafa0cad59b271a6323a4c01dc72"
  },
  {
    "url": "lib/ngmap/testapp/map_with_dynamic_center.html",
    "revision": "3e776de1c73715255cde91610f1e48b8"
  },
  {
    "url": "lib/ngmap/testapp/map_zoom_to_include_markers.html",
    "revision": "4f41e1d15c7de5ad4b613f6f4668b983"
  },
  {
    "url": "lib/ngmap/testapp/map-coordinates.html",
    "revision": "3b85343687cab80c5433f37c26cd81d4"
  },
  {
    "url": "lib/ngmap/testapp/map-geolocation.html",
    "revision": "ce1466047420f8acba3bb8ad2307d13a"
  },
  {
    "url": "lib/ngmap/testapp/map-gulp-usemin.html",
    "revision": "9e29b6cc19e1405edca12aba31a55d2b"
  },
  {
    "url": "lib/ngmap/testapp/map-gulp-usemin/map-gulp-usemin.html",
    "revision": "b38e1e0901de4c4cde5c1ee3cfeb60f5"
  },
  {
    "url": "lib/ngmap/testapp/map-initialized-callback.html",
    "revision": "a66ff231441f8e4c0fd4294829acd4b8"
  },
  {
    "url": "lib/ngmap/testapp/map-initialized.html",
    "revision": "57b5356492bca210d7d86462cdc32af7"
  },
  {
    "url": "lib/ngmap/testapp/map-lazy-inint.html",
    "revision": "66855ce4a6c2e685262b90e9ac59e5bb"
  },
  {
    "url": "lib/ngmap/testapp/map-lazy-load-params.html",
    "revision": "d93b1762e637afc9a4d1afc5dc001472"
  },
  {
    "url": "lib/ngmap/testapp/map-projection-simple.html",
    "revision": "3570d23a85a9746643f74216fc58df76"
  },
  {
    "url": "lib/ngmap/testapp/map-simple.html",
    "revision": "a3e903a8048193430630b63656cf83b8"
  },
  {
    "url": "lib/ngmap/testapp/map-with-dynamic-id.html",
    "revision": "7e3e3b1e181d2d249e1c0f277fbc65e5"
  },
  {
    "url": "lib/ngmap/testapp/mapsenginelayer-noauth-layerid.html",
    "revision": "e6783aed36756980c34aef77509a22db"
  },
  {
    "url": "lib/ngmap/testapp/mapsenginelayer-noauth-layerkey.html",
    "revision": "5ae7efe636e4b7fcfbfbea7a3a755d83"
  },
  {
    "url": "lib/ngmap/testapp/maptype-base.html",
    "revision": "8c718f8604ec251077575934e3a32278"
  },
  {
    "url": "lib/ngmap/testapp/maptype-image-overlay.html",
    "revision": "284220d122e6bfc77992ea9ecfefd65a"
  },
  {
    "url": "lib/ngmap/testapp/maptype-image.html",
    "revision": "1f65c0ffd11a38fa0dc61fa0fc08f059"
  },
  {
    "url": "lib/ngmap/testapp/maptype-overlay.html",
    "revision": "74929cdb0d4d5de60332fc8f3e9f364d"
  },
  {
    "url": "lib/ngmap/testapp/maptype-styled-complex.html",
    "revision": "bffdffd8ed778a0006271c57ff94b070"
  },
  {
    "url": "lib/ngmap/testapp/maptype-styled-simple.html",
    "revision": "e198f76a80c081b82db314ccd75c3747"
  },
  {
    "url": "lib/ngmap/testapp/marker_data_with_ng_repeat.html",
    "revision": "d76589dee1b890381c15c2705dbe7ed3"
  },
  {
    "url": "lib/ngmap/testapp/marker_dynamic_ng_repeat.html",
    "revision": "c9a4fde48b3a77172075b378d3319ff9"
  },
  {
    "url": "lib/ngmap/testapp/marker_icon.html",
    "revision": "c7216c319329f253764f7295a805d87f"
  },
  {
    "url": "lib/ngmap/testapp/marker_on_street_view.html",
    "revision": "5fcc98c7e2ec8e08669c65da76680fea"
  },
  {
    "url": "lib/ngmap/testapp/marker_with_address.html",
    "revision": "0872984cd495bcc9113ef38ffecb40af"
  },
  {
    "url": "lib/ngmap/testapp/marker_with_current_position.html",
    "revision": "8d5aac0719e4ebd4d00abd3239aa8d83"
  },
  {
    "url": "lib/ngmap/testapp/marker_with_dynamic_address.html",
    "revision": "d38f93781387a1a5d04254e03e18a8f2"
  },
  {
    "url": "lib/ngmap/testapp/marker_with_ng_repeat_dynamic.html",
    "revision": "b6b238b7b33e84b77580ee51e1e268d4"
  },
  {
    "url": "lib/ngmap/testapp/marker_with_ng_repeat_no_watcher.html",
    "revision": "a5877586a551c775e054c1749a9aead7"
  },
  {
    "url": "lib/ngmap/testapp/marker_with_parent_controller.html",
    "revision": "024766daa506d6f0bda09b1e69208391"
  },
  {
    "url": "lib/ngmap/testapp/marker-animations-iteration.html",
    "revision": "dd593322edde72b15a9cee7aaad796d7"
  },
  {
    "url": "lib/ngmap/testapp/marker-animations.html",
    "revision": "800f639d7b48790d3577b87af510149b"
  },
  {
    "url": "lib/ngmap/testapp/marker-clusterer.html",
    "revision": "232ae507a1950abe297039982b01a4e9"
  },
  {
    "url": "lib/ngmap/testapp/marker-remove.html",
    "revision": "892589e2000eaafbe10c2b75417cf193"
  },
  {
    "url": "lib/ngmap/testapp/marker-simple.html",
    "revision": "ad90c4b1503c7c1b866a15e8e3d14760"
  },
  {
    "url": "lib/ngmap/testapp/marker-symbol-custom.html",
    "revision": "e876ae7edd4b3b958e9b967d2101c37c"
  },
  {
    "url": "lib/ngmap/testapp/marker-symbol-predefined.html",
    "revision": "73caed2bafb5a2af1abbf0d1055fcd1d"
  },
  {
    "url": "lib/ngmap/testapp/marker-with-default-options.html",
    "revision": "120c1419838ced4914927478a4c7859a"
  },
  {
    "url": "lib/ngmap/testapp/marker.html",
    "revision": "655ad4f79009fbcc599cb88b5495e003"
  },
  {
    "url": "lib/ngmap/testapp/multiple_maps_on_a_page.html",
    "revision": "53f88c6965d39b0f7f239b9f5705fd3b"
  },
  {
    "url": "lib/ngmap/testapp/overlay-custom.html",
    "revision": "a1c1f5ea056c258cd21709a0ec56082a"
  },
  {
    "url": "lib/ngmap/testapp/overlay-hideshow.html",
    "revision": "f575757b2c36a9a5bef73c3f4fc8cc53"
  },
  {
    "url": "lib/ngmap/testapp/overlay-remove.html",
    "revision": "0fe7d9b2cf14aa642f482566ac6c1173"
  },
  {
    "url": "lib/ngmap/testapp/overlay-simple.html",
    "revision": "e883b319c81c9c4e9bcb4052172782f4"
  },
  {
    "url": "lib/ngmap/testapp/overlay-symbol-animate.html",
    "revision": "09c4926684c3d84897c9b8c04ae19edf"
  },
  {
    "url": "lib/ngmap/testapp/overlay-symbol-arrow.html",
    "revision": "53657f3ed052647a0f85fbaedf12dd1d"
  },
  {
    "url": "lib/ngmap/testapp/overlay-symbol-custom.html",
    "revision": "afbc271aa3142c808a52e9fb21f2c7f6"
  },
  {
    "url": "lib/ngmap/testapp/overlay-symbol-dashed.html",
    "revision": "4e673ddb02727ad94c77d6a57588b496"
  },
  {
    "url": "lib/ngmap/testapp/partials/custom-info-window-template.html",
    "revision": "b09033763b049e5a4f376c2965c1def4"
  },
  {
    "url": "lib/ngmap/testapp/places-auto-complete.html",
    "revision": "a6efa72010b98471d3f6cc801b1d1251"
  },
  {
    "url": "lib/ngmap/testapp/polygon-arrays.html",
    "revision": "dad111d51d7942b8798567509908a1f4"
  },
  {
    "url": "lib/ngmap/testapp/polygon-autoclose.html",
    "revision": "66db1c9e37c9fe3390267a2bbb27c996"
  },
  {
    "url": "lib/ngmap/testapp/polygon-draggable.html",
    "revision": "db7515b542039624d7e2206c2aa91b86"
  },
  {
    "url": "lib/ngmap/testapp/polygon-simple.html",
    "revision": "35f9c1c7e1968547a99bc5a665890231"
  },
  {
    "url": "lib/ngmap/testapp/polyline-complex.html",
    "revision": "783f659c00852e68f03d48ebf973cb4d"
  },
  {
    "url": "lib/ngmap/testapp/polyline-remove.html",
    "revision": "20fd8c62b934ea122f49842854331ff1"
  },
  {
    "url": "lib/ngmap/testapp/polyline-simple.html",
    "revision": "45bf360237683dfd39ee729474b0e38c"
  },
  {
    "url": "lib/ngmap/testapp/rectangle-event.html",
    "revision": "e460803421938488a063ee25a4094090"
  },
  {
    "url": "lib/ngmap/testapp/rectangle-simple.html",
    "revision": "b76a9dc1f27d5533a187274c77719167"
  },
  {
    "url": "lib/ngmap/testapp/rectangle-zoom.html",
    "revision": "05937c19ea93022c117eb6554dcd7951"
  },
  {
    "url": "lib/ngmap/testapp/scripts/quakes.geo.json",
    "revision": "a508a859e9dce3cdfaae4788bd558cbb"
  },
  {
    "url": "lib/ngmap/testapp/shape_circle_with_current_position.html",
    "revision": "90cdb9913f13de1b71429cdf14c9d22e"
  },
  {
    "url": "lib/ngmap/testapp/shape_circle_with_dynamic_address.html",
    "revision": "59dfbc2f8f1f5ca1cc1b88ef7e68526e"
  },
  {
    "url": "lib/ngmap/testapp/shape_with_ng_repeat.html",
    "revision": "3741b931b74a442783a6fa1651b09ed4"
  },
  {
    "url": "lib/ngmap/testapp/shape.html",
    "revision": "0804697b520e64af3849c919abe9cd82"
  },
  {
    "url": "lib/ngmap/testapp/street-view_road_trip.html",
    "revision": "49ca495affc00368442f404cf61be49f"
  },
  {
    "url": "lib/ngmap/testapp/street-view-panorama_container.html",
    "revision": "96378db58f943210b6eb6ab2ecd6cf8b"
  },
  {
    "url": "lib/ngmap/testapp/street-view-panorama_container2.html",
    "revision": "53a916953274cfe3f0aeb308dafd1f15"
  },
  {
    "url": "lib/ngmap/testapp/street-view-panorama.html",
    "revision": "fb207cb6e8b32e973198e7ab74acdb80"
  },
  {
    "url": "lib/ngmap/testapp/ui-bootstrap.html",
    "revision": "821e7395edf995a56dbbbac8d47f595e"
  },
  {
    "url": "lib/ngmap/testapp/ui-router.html",
    "revision": "daede609bd97ef952be4f396f8730900"
  },
  {
    "url": "lib/ngmap/testapp/ui-router2.html",
    "revision": "97560e21235569b69f2ce1869adb2d0c"
  },
  {
    "url": "lib/ngmap/testapp/us-states-20m.json",
    "revision": "8ec14844f3b39324ba4e381a947a53d9"
  },
  {
    "url": "lib/ngmap/testapp/user-editable-shapes.html",
    "revision": "6c4094290f732eca71823308c589b0f5"
  },
  {
    "url": "lib/ngstorage/bower.json",
    "revision": "3938cf7ab4848db65fbc432f4bd11d2b"
  },
  {
    "url": "lib/ngstorage/README.md",
    "revision": "30afbbd9ae053bbd9e8e9295eea42447"
  },
  {
    "url": "manifest.json",
    "revision": "de6bf602a98a7b89cd0363aa61aaf55f"
  },
  {
    "url": "templates/addCatch.html",
    "revision": "a42d6a716e8020200c922a2d381087fc"
  },
  {
    "url": "templates/catchLog.html",
    "revision": "5e320a76f62dea37bf4b9d3193ba91d6"
  },
  {
    "url": "templates/demandMap.html",
    "revision": "e50631dbcf95a9ca2dfb19c1f049b423"
  },
  {
    "url": "templates/inventory.html",
    "revision": "3726371e6858cf6bb4be29a5652da5d8"
  },
  {
    "url": "templates/sales.html",
    "revision": "6aa8210ccbd0d1a0da9b88f2c04b1eb2"
  },
  {
    "url": "templates/tabsController.html",
    "revision": "ac9aaa6e4518ab690a3f633bfabb8036"
  },
  {
    "url": "templates/vendorMap.html",
    "revision": "da8e0a95ade7392ef7ae623825f027ab"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
]);



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
          resolve(db.events.clear());
          self.registration.showNotification("Event Success", {
            body: "Your event was sent successfully in the background!",
            icon: "images/android-desktop.png",
            badge: "images/cal.png"
          });
        });
    }catch(e){
      reject(e)
    }
  }));
  
});


self.addEventListener('push', function(event) {
  var title = 'Request Sen!';
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
