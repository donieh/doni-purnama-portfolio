import fs from 'node:fs';
const u='https://www.instagram.com/reel/DU43-QNEgl-/';
const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0'}});
const h=await r.text();
const og=(h.match(/<meta property="og:image" content="([^"]+)"/)||[])[1].replace(/&amp;/g,'&');
const ir=await fetch(og,{headers:{'User-Agent':'Mozilla/5.0'}});
const b=Buffer.from(await ir.arrayBuffer());
fs.writeFileSync('assets/posts/DU43-QNEgl-.jpg',b);
console.log('DU43',b.length);
