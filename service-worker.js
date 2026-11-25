// Ayenas v12 — network-first untuk HTML & data, cache-first untuk gambar/ikon.
const CACHE='ayenas-v14';
const STATIC=['./','./index.html','./crew.html','./manifest.webmanifest','./icon-192.png','./icon-512.png',
  './korean.jpg','./nasi.jpg','./ramen.jpg','./pasta.jpg','./mandy.jpg','./superbox.jpg','./chickenchop.jpg','./snacks.jpg','./drinks.jpg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  const r=e.request, url=new URL(r.url);
  if(r.method!=='GET' || url.origin!==location.origin) return; // Firebase, fonts: terus ke network
  if(/\.(jpe?g|png|webp|gif|svg)$/i.test(url.pathname)){
    e.respondWith(caches.match(r).then(c=>c||fetch(r).then(res=>{const cp=res.clone();caches.open(CACHE).then(ca=>ca.put(r,cp));return res;})));
    return;
  }
  e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{const cp=res.clone();caches.open(CACHE).then(ca=>ca.put(r,cp));return res;}).catch(()=>caches.match(r).then(c=>c||caches.match('./index.html'))));
});
