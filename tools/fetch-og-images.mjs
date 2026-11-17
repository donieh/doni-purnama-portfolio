import fs from 'node:fs';
import path from 'node:path';
const data = JSON.parse(fs.readFileSync('tools/final-posts.json', 'utf8'));
const OUT = path.resolve('assets/posts');
const decode = (s='') => s.replace(/&amp;/g,'&').replace(/&quot;/g,'"');

for (const b of data.brands) {
  for (let i = 0; i < b.items.length; i++) {
    const it = b.items[i];
    try {
      const res = await fetch(it.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const raw = (html.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
      if (!raw) { console.log('NO OG', b.slug, i+1); continue; }
      const img = await fetch(decode(raw), { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const buf = Buffer.from(await img.arrayBuffer());
      for (const ext of ['jpg','webp','png']) {
        const p = path.join(OUT, `${b.slug}-${i+1}.${ext}`);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      fs.writeFileSync(path.join(OUT, `${b.slug}-${i+1}.jpg`), buf);
      console.log('OK', `${b.slug}-${i+1}.jpg`, Math.round(buf.length/1024)+'KB');
    } catch (e) { console.log('FAIL', b.slug, i+1, String(e)); }
  }
}
