import fs from 'node:fs';
import path from 'node:path';
const data = JSON.parse(fs.readFileSync('tools/final-posts.json','utf8'));
const native = JSON.parse(fs.readFileSync('tools/posts-native.json','utf8').replace(/^\uFEFF/,''));
const OUT = path.resolve('assets/posts');
const decode = s => s.replace(/&amp;/g,'&').replace(/&quot;/g,'"');

for (const b of data.brands) {
  for (let i = 0; i < b.items.length; i++) {
    const n = native.find(x => x.brand === b.slug && x.index === i + 1);
    let url = n && n.exact && n.src ? n.src : null;
    let source = 'native';
    if (!url) {
      const res = await fetch(b.items[i].url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      url = decode((html.match(/<meta property="og:image" content="([^"]+)"/) || [])[1] || '');
      source = 'og-fallback';
    }
    if (!url) { console.log('NO URL', b.slug, i+1); continue; }
    try {
      const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const buf = Buffer.from(await r.arrayBuffer());
      for (const ext of ['jpg','webp','png']) {
        const p = path.join(OUT, `${b.slug}-${i+1}.${ext}`);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      fs.writeFileSync(path.join(OUT, `${b.slug}-${i+1}.jpg`), buf);
      console.log('OK', `${b.slug}-${i+1}`, source, n ? `${n.w}x${n.h}` : '?', Math.round(buf.length/1024)+'KB');
    } catch (e) { console.log('FAIL', b.slug, i+1, String(e)); }
  }
}
