/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-bf399525'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "1d52865c6aee5320bdcf.jpg",
    "revision": null
  }, {
    "url": "1f92084e5159ff4a1565.woff",
    "revision": null
  }, {
    "url": "bundle.js",
    "revision": "e9397a085e2a26e475c363428ca23457"
  }, {
    "url": "c2acd0026124c233aa58.png",
    "revision": null
  }, {
    "url": "public/imgs/AcercaDe.png",
    "revision": "8619afdd9c6ab44490f84b3cd5a9fb8e"
  }, {
    "url": "public/imgs/Fondo.jpg",
    "revision": "4de47a12de9609fd3ebedfd514fc267d"
  }, {
    "url": "public/imgs/Pastries_6.jpg",
    "revision": "5dfd29e2900a2d8190c3aa2f4b08a775"
  }, {
    "url": "public/imgs/huevos_4.png",
    "revision": "62a5385c47efba2df7827e8222bb0caa"
  }, {
    "url": "public/imgs/muffins_9.png",
    "revision": "bd18ef342b91a15a975bc6a76353004a"
  }, {
    "url": "public/imgs/pastel_8.jpg",
    "revision": "554b20e954195b8e2789fbfcdabfc137"
  }, {
    "url": "public/imgs/pizza_1.jpg",
    "revision": "66eaa6de4993aa35f775446eb6e10668"
  }, {
    "url": "public/imgs/pollo_5.jpg",
    "revision": "7eb0c98d616cbd9714cb66476d4fe776"
  }, {
    "url": "public/imgs/restaurant_7.jpg",
    "revision": "473aeebdda411b4edbe7fb1bd23e4cd6"
  }, {
    "url": "public/imgs/restaurantes.jpg",
    "revision": "24f28221e0d55c679c4db659ad63ce0c"
  }, {
    "url": "public/imgs/salad_2.jpg",
    "revision": "378f04b07d819a657bc793106caebd54"
  }, {
    "url": "public/imgs/spaghetti_3.jpg",
    "revision": "e2e4c1c5e8a5699db97d060e37c31ff5"
  }, {
    "url": "public/imgs/textura.png",
    "revision": "3210e1fe6810095584e5b8a5ecf07fd7"
  }, {
    "url": "public/imgs/textura2.png",
    "revision": "3e18ad51fdcfe1195e5d4ab601a205e7"
  }], {});

}));
