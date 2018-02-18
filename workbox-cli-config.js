module.exports = {
  "globDirectory": "www\\",
  "globPatterns": [
    "**/*.{css,ttf,woff,woff2,png,html,json,gzip,map,md,scss,svg,ts,eot,yml,txt,tmpl,ico,gif}"
  ],
  "swSrc": "sw-src.js",
  "swDest": "www/sw.js",
  "globIgnores": [
    "..\\workbox-cli-config.js",
    "src/sw-src.js"
  ]
};
