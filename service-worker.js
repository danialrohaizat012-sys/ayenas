const CACHE='ayenas-no-storage-v3';
const STATIC=['./','./index.html','./crew.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request;
  if(r.mode==='navigate'){e.respondWith(fetch(r,{cache:'no-store'}).catch(()=>caches.match(r)));return;}
  e.respondWith(caches.match(r).then(c=>c||fetch(r)));
});
