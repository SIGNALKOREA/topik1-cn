'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e955a7671527dd014a1ff25d467d48ab",
"assets/AssetManifest.bin.json": "3f2a6c3e44d2359bcc7fed10e1c81658",
"assets/AssetManifest.json": "86db5f9a52bf8ff494a12e77c2b24b5a",
"assets/assets/basic/1t1.png": "ee19881db34211e2403f3ec7c456d4e1",
"assets/assets/basic/1t2.png": "f5b2bf93c3436f033d2ba2453edd66ea",
"assets/assets/basic/1t3.png": "037910fea1f35deb6fcfe9f84882af80",
"assets/assets/basic/about1.png": "4a06da89e2cf93797332a17a127d5e05",
"assets/assets/basic/about2.png": "153b15e591434ba8a6e7b241787ec8a3",
"assets/assets/basic/about3.png": "e558d0d480e07779b9654ae27f98afb2",
"assets/assets/basic/answer.png": "6f38bd0737df5323a3eda228e8cb10b6",
"assets/assets/basic/comments.png": "8e4978f9837871ba0abe6140d173ffb4",
"assets/assets/basic/f35.png": "e0721fd3667ec819a32c6264271e9c00",
"assets/assets/basic/f36.png": "891bfe497c24024c2dd67ac112df66d6",
"assets/assets/basic/f37.png": "6254a37fd4bc12b7bf933a953f2a1404",
"assets/assets/basic/f41.png": "9e84132fe31cf444cddf9323f82e6143",
"assets/assets/basic/f47.png": "81e36472e053a3ee9079c53a5dadc911",
"assets/assets/basic/f52.png": "51ec26d38104b1d0659b34e49945fba6",
"assets/assets/basic/f60.png": "45f0b9e72b16e438ccf3277d26cae1ed",
"assets/assets/basic/f64.png": "e63f19ff192c8ab8987d8d36d7783e99",
"assets/assets/basic/finger.png": "b66468a2eb4dd510f6a553bbb307a120",
"assets/assets/basic/instaicon.png": "dbcbd4801093931e989664e78cdf7553",
"assets/assets/basic/intro1.png": "f9ea8b9134ccd8951ea6dc4ddc79729b",
"assets/assets/basic/intro2.png": "1e5810b502bfb82ec1c5fef7b046dc90",
"assets/assets/basic/intro3.png": "0f51776e01037a0ca339493ffc7cb38e",
"assets/assets/basic/kssicon.png": "5b5b2322cdbf403e660043ea095b8940",
"assets/assets/basic/launchericon.png": "0e6eb35f8bdcf95f68122519e6be1122",
"assets/assets/basic/left.png": "716fd477556cfd986e7f33fecacf8fdc",
"assets/assets/basic/loading.png": "f9f8041353198f77b880c7adb6654620",
"assets/assets/basic/logo1.png": "a244e06977601bfc8ba46f7e423fd4e0",
"assets/assets/basic/lp1.png": "da577327990a0be714e2c4e67fe999a0",
"assets/assets/basic/lp2.png": "7332709a7afb65e038bad1c280727939",
"assets/assets/basic/lp21.png": "4eecaf2fa5d28938fcfb916c1c18e7f0",
"assets/assets/basic/lp22.png": "ca31e1510fd21f78fc260ef95694f9be",
"assets/assets/basic/lp23.png": "bf7e08ef4dcbc1e4073cec4176011779",
"assets/assets/basic/lp24.png": "e896a497642c3d4eab2976099bb7d55d",
"assets/assets/basic/lp25.png": "e4335e9cf642be6eb72bf1fa4dcec554",
"assets/assets/basic/lp26.png": "172b4901c0df725cbbff334562f99d40",
"assets/assets/basic/lp27.png": "26905c4930215dfc157e1de91e291059",
"assets/assets/basic/lp28.png": "4b3bfb9108214ba1c47178ca5c8cb695",
"assets/assets/basic/lp3.png": "0dbc938fd54b2e46b2f4c384094af2c6",
"assets/assets/basic/lp4.png": "287051830977764703955426445b3843",
"assets/assets/basic/lp5.png": "ed4ed0a88c61a2c856e3d08a02127b16",
"assets/assets/basic/lp6.png": "4f4a0bbc0f02b0abfd3e405958d0ba15",
"assets/assets/basic/lp7.png": "970fb750d1dc25e1b66e00da4590dfe3",
"assets/assets/basic/lp8.png": "b078fe73dcb22d5cfa2bf58f3b9e4db1",
"assets/assets/basic/lunchericon.png": "0e6eb35f8bdcf95f68122519e6be1122",
"assets/assets/basic/rate1.png": "7b18df88e3b3b3f6a9e845274946bf16",
"assets/assets/basic/rate2.png": "525f1cae842a2f6b541ab0c605782446",
"assets/assets/basic/right.png": "157b724a77932cfb07c45dc936f87473",
"assets/assets/basic/rp1.png": "1d7f037107de8c2ba9356ee076fad398",
"assets/assets/basic/rp2.png": "6ddaa66be2933141000da2c3c675d411",
"assets/assets/basic/rp21.png": "057e626ab1b4988d2a653c396c9a8925",
"assets/assets/basic/rp22.png": "a14cbee0fa93050b7bdd51b6e9fbd124",
"assets/assets/basic/rp23.png": "faefa69168856f85af3027368ab53f6d",
"assets/assets/basic/rp24.png": "903cbc62787333abbd6131dbab2e2340",
"assets/assets/basic/rp25.png": "b28f417fa4af85a188071cbcb3f82771",
"assets/assets/basic/rp26.png": "0e2880519c00a58752c5814530e57542",
"assets/assets/basic/rp27.png": "0ca0a50ad109bde025d1a338a1687c8f",
"assets/assets/basic/rp28.png": "11fc70bd447733143d1beed1839324ea",
"assets/assets/basic/rp3.png": "e8f261bf916b0e9b1505c5813c5c9c58",
"assets/assets/basic/rp4.png": "8f0e198cc3edfa676f6cc653d2ca0f0a",
"assets/assets/basic/rp5.png": "9203452c036612b9e9ba121d3dc880e0",
"assets/assets/basic/rp6.png": "8c8bebea3ef79911da09d649074f3c05",
"assets/assets/basic/rp7.png": "2b103b40b065a5c5a67d6710967c54f2",
"assets/assets/basic/rp8.png": "8d1c5097b6716914a5a2ecb9778e8f98",
"assets/assets/basic/sigicon.png": "5583f6c8d06f60d6dff5bdd3fc0a8d50",
"assets/assets/basic/sol1.png": "1d5c969fa0acbaa8ed9d50c82ff7b0d4",
"assets/assets/basic/sol2.png": "e07e87e3b781b64f80cc86ea4711dd16",
"assets/assets/basic/sol_arb.png": "88cce3c0766e0e6498bbcff7a2952111",
"assets/assets/basic/sol_chn.png": "def152c3e32d872595592cbfd9f5c2fd",
"assets/assets/basic/sol_chn2.png": "5e43e3f7294ee8d230b4f599285bb9be",
"assets/assets/basic/sol_eng.png": "944c7012efe4b3cb7c1f73f72ca9adf3",
"assets/assets/basic/sol_jpn.png": "7b633bcca84736dade4ee5e35133dbe8",
"assets/assets/basic/sol_kor.png": "ae0ff895bbe610be48e6464ae7993a46",
"assets/assets/basic/sol_mls.png": "e8b4fd7aa76fa434d8db896a62c57a08",
"assets/assets/basic/sol_vtn.png": "ce8a1a11ec14bc0c9a981cfc22dfc07f",
"assets/assets/basic/t235.png": "12e77b34c3ca37e65d4780fcd988bf23",
"assets/assets/basic/t236.png": "7f91f468598597435e46ac13984df56c",
"assets/assets/basic/t237.png": "99ccd12ac7691fedf0a01bc7eebbbcc8",
"assets/assets/basic/t241.png": "07fe08c100894dfe2d27bbda9df88483",
"assets/assets/basic/t247.png": "4352d9a194974adb415ab8e0b16bf68b",
"assets/assets/basic/t252.png": "f98bdcc44ff826e611c1a512a1a6103d",
"assets/assets/basic/t260.png": "75f0b960872314451f8063ca95c3f88a",
"assets/assets/basic/t264.png": "ef047eb7879645ef6464d497e0943161",
"assets/assets/basic/t35.png": "4f7f55fa6a96942b92e318aa33ef815c",
"assets/assets/basic/t36.png": "a9b820ac8055492a642b1bdf3cb08913",
"assets/assets/basic/t37.png": "b7c8451e91f723880e95fa673fb232ec",
"assets/assets/basic/t41.png": "eb05f042a574eb73d23e2e62dde799d4",
"assets/assets/basic/t47.png": "a76ca6fe029095fd541ce4cb3084fb21",
"assets/assets/basic/t52.png": "bce28908673650c8ed9d5eaf7c7929b3",
"assets/assets/basic/t60.png": "88ee7b4ca030fabc024b863c52128efa",
"assets/assets/basic/t64.png": "51053005b7e95e3bc9fa45b2acdf92fc",
"assets/assets/basic/ticonmainslid1.png": "f6a01fbb904e7898d458a04c06185f1f",
"assets/assets/basic/ticonmainslid2.png": "73b9f9bf0192109a5d0a1d00aa0d055a",
"assets/assets/basic/title.png": "23fa0599ab01612ae6056584402e7303",
"assets/assets/basic/title1.png": "1a93868e8ec0a245ba5ae488cf65c193",
"assets/assets/basic/titlel.png": "d3e434be0e2c9a401e7dd992a0aeec90",
"assets/assets/basic/titlelite.png": "0be641ed21fd31a15816ad64de1fee58",
"assets/assets/basic/titler.png": "ed516666cde7197deba7086b84c59aad",
"assets/assets/basic/tlp11.png": "38e2f4d8d030f9086236014aedd0221b",
"assets/assets/basic/tlp12.png": "50ea5a8245c323f454999c005913a57b",
"assets/assets/basic/tlp13.png": "743bc8d008c936417ba3dab11c2f0595",
"assets/assets/basic/tlp14.png": "4338f0a19b446645bf11f0e41b71a127",
"assets/assets/basic/tlp15.png": "5d63ef760fa32f0e79c3d301d662d02b",
"assets/assets/basic/tlp16.png": "6beda1414f1c72a17fd511c64dc18a2c",
"assets/assets/basic/tlp17.png": "2da23f76d160fc65f3374f9b19d78c1d",
"assets/assets/basic/tlp18.png": "e58cfb0af56f032439ed1b4f80b36437",
"assets/assets/basic/tlp21.png": "19af5ea31071059df1b2ccdf04560e12",
"assets/assets/basic/tlp22.png": "e897b30629adc87ba0b5e8a0f6874603",
"assets/assets/basic/tlp23.png": "61e2be7fa5ea3b84ce73eeb12271759a",
"assets/assets/basic/tlp24.png": "c72bfdeeb57e07783facd1b3fe28cf20",
"assets/assets/basic/tlp25.png": "c04854c14f8a8cacb36c305eb7a8922d",
"assets/assets/basic/tlp26.png": "306dca7a8da0e94af7e789e9b1b3c48a",
"assets/assets/basic/tlp27.png": "edb18e5a44e37e79a0fef015b03d6d59",
"assets/assets/basic/tlp28.png": "6f94342daea639cd1c238fd3b9446ef0",
"assets/assets/basic/topik.png": "f13ed261cfc6889f999db73484386611",
"assets/assets/basic/trp11.png": "4338f0a19b446645bf11f0e41b71a127",
"assets/assets/basic/trp12.png": "835ce4b3a89042c598f5692a7724373a",
"assets/assets/basic/trp13.png": "f673f47bb8053ffb5ab9766cdc0b5190",
"assets/assets/basic/trp14.png": "c82c172cdb25999412fedadd7960c534",
"assets/assets/basic/trp15.png": "b0a7471cc3377ed5d2a785b72c77aeef",
"assets/assets/basic/trp16.png": "763c095356148c0b1955c6b7dfdfb33d",
"assets/assets/basic/trp17.png": "0e250ad3875fd76540ff704490b36b7e",
"assets/assets/basic/trp18.png": "d2224f1f33992b7a28e1a2aeaeafd601",
"assets/assets/basic/trp21.png": "c72bfdeeb57e07783facd1b3fe28cf20",
"assets/assets/basic/trp22.png": "fab53ad08b5e49fbcded290feabe4a79",
"assets/assets/basic/trp23.png": "87f7748009d9d7b8c67bbed4611e5b83",
"assets/assets/basic/trp24.png": "a9cd11c0528469610e02361168c0caa3",
"assets/assets/basic/trp25.png": "d6a3235fe24576ee8e212bd106161ae5",
"assets/assets/basic/trp26.png": "f4101c2db9e0300f65ac0740c28b0310",
"assets/assets/basic/trp27.png": "d320b186517241ca15bf5beb8a1e7820",
"assets/assets/basic/trp28.png": "a5e5cca78cb24a343f9ba3338b14726a",
"assets/assets/basic/type1.png": "1cf208d3ef28e0ccb2dfa938e7f85429",
"assets/assets/basic/type2.png": "3eb9462e4b9391baf466245875548c74",
"assets/assets/basic/type3.png": "b19563a15d8abcc6a53350bbfcbeacf5",
"assets/assets/basic/watermark.png": "0cbee1ba6f4e820734f1d7f56bdde835",
"assets/assets/images/3515.png": "ead87209651250b1362a435e98119d58",
"assets/assets/images/3516.png": "1947631e0e29fed6f379edd0d08f0885",
"assets/assets/images/3540.png": "e75023b9735cca3b13c83529397bc782",
"assets/assets/images/3541.png": "97e3ff1285327e0ccd3de479dfc168d4",
"assets/assets/images/3542.png": "bffbf611a081c10d21d11c2c4d96fd25",
"assets/assets/images/356364.png": "64e460667f152cc46023e8d175e2d342",
"assets/assets/images/3615.png": "bb3e77359f8bec79bd666140ef713562",
"assets/assets/images/3616.png": "e3f8f190fb57fb651a422189db7755b4",
"assets/assets/images/3640.png": "c9fe40d3d20c3a070b69a488970a23f8",
"assets/assets/images/3641.png": "d8b14f670da55eef8a1766c0a1a179a4",
"assets/assets/images/3642.png": "446430a1dd109c2d6ba9afb6eb404052",
"assets/assets/images/366364.png": "5419eb4b98f8afa87db4ca1f0760805a",
"assets/assets/images/4115.png": "f2096ef3c8219f184dc6645e53299eb4",
"assets/assets/images/4116.png": "81181945d92aa10d17999d69a347c800",
"assets/assets/images/4140.png": "da4f180d2192c566036e799f277f334d",
"assets/assets/images/4141.png": "e04376f4a823577de13d09d83f071daf",
"assets/assets/images/4142.png": "9c8b6edd8f9a5aff57c2530ce1243b69",
"assets/assets/images/416364.png": "12636945538aab00fe39a25e4f4a8672",
"assets/assets/images/4715.png": "e3496a67c69312b27f20a6eed80d4a15",
"assets/assets/images/4716.png": "a075d0281ef0f67eff2d890224a827db",
"assets/assets/images/4740.png": "9dde02880c31b4b8adf64f0aaaea9067",
"assets/assets/images/4741.png": "573d4194b1711cf72290604bb105a8ad",
"assets/assets/images/4742.png": "9f1a40684200e18f121ae4919ffda4c3",
"assets/assets/images/476364.png": "25f2265cbfad4d7e31eeb45ce2f60695",
"assets/assets/images/5215.png": "9d057e1530b7b51423d3460c491d5db9",
"assets/assets/images/5216.png": "b5a049365867a9f0645825e0205c03b8",
"assets/assets/images/5240.png": "92f4660fd4a83f01380c8215ca032357",
"assets/assets/images/5241.png": "2cd441e0b29f8f2736e0be343bc0b646",
"assets/assets/images/5242.png": "73f43de44db9ea0a247396cd337220c0",
"assets/assets/images/526364.png": "33749dae247c66b6afd6f2ad96c053d6",
"assets/assets/images/6015.png": "82d8304d9940d7606561284a13f27a45",
"assets/assets/images/6016.png": "5804bc9d55f7cdccf6c7c27c2daf5e25",
"assets/assets/images/6040.png": "1a769cf133bafcc7e6eb3add0405cd1c",
"assets/assets/images/6041.png": "fb49a298a2bb855b171d7d94e9df8ec4",
"assets/assets/images/6042.png": "211092d61f1f39ab74b563a39bda967c",
"assets/assets/images/606364.png": "46717ebe65ec5a4367d5233527048675",
"assets/assets/images/6415.png": "a02d90e2faeae88b32ac7f4e564efb2a",
"assets/assets/images/6416.png": "2330d962225c794426329c1e9aab15de",
"assets/assets/images/6440.png": "6e59797ede83952f3f70175545abadaa",
"assets/assets/images/6441.png": "623d74d8904fa4177ae66bbbee35dd05",
"assets/assets/images/6442.png": "7b5099e0e4666f17ac424bf20bfcad56",
"assets/assets/images/646364.png": "60dd4cb5634efa4c375e2b74345d6e4c",
"assets/assets/translations/ar.json": "64164232daa0037d53bb0e111d098084",
"assets/assets/translations/en.json": "efd90a00d65ab716ddc297598c1a23c9",
"assets/assets/translations/ja.json": "b6f19dcaf628403c5d227d654ad12ebb",
"assets/assets/translations/ko.json": "ab670eaae064157ca8a48abd5df1b21b",
"assets/assets/translations/vi.json": "efd90a00d65ab716ddc297598c1a23c9",
"assets/assets/translations/zh.json": "208ece4b7bc9d53843d09eb4a6e37578",
"assets/FontManifest.json": "726d6eb3f3789ad1d946c030038d2af8",
"assets/fonts/MaterialIcons-Regular.otf": "bd893a9c7f6bfcc568fc4e37f31d3d8f",
"assets/NOTICES": "225558a64d2dc419c0fac9d051ebdaa3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/outline_material_icons/lib/outline_material_icons.ttf": "6b94994fffd9868330d830fcb18a6026",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b95d32b8c56031b165062d353d7a8d37",
"/": "b95d32b8c56031b165062d353d7a8d37",
"main.dart.js": "9466e3558b965dada34c9c313df53e88",
"manifest.json": "65f4db08779e10dd41668d29b0917e63",
"version.json": "b98aafdc2fa701bf57dc4ef64bdb33c1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
