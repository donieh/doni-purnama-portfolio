import fs from 'node:fs';
const u = 'https://www.instagram.com/reel/Det-DH5uR8q/';
const r = await fetch(u, { headers: { 'User-Agent': 'Mozilla/5.0' } });
const h = await r.text();
const og = (h.match(/<meta property="og:image" content="([^"]+)"/) || [])[1].replace(/&amp;/g, '&');
const ir = await fetch(og, { headers: { 'User-Agent': 'Mozilla/5.0' } });
const b = Buffer.from(await ir.arrayBuffer());
fs.writeFileSync('assets/posts/optipro-1.jpg', b);
console.log('optipro-1', b.length);
