import fs from 'node:fs';
import path from 'node:path';
const cands = JSON.parse(fs.readFileSync('tools/video-candidates.json','utf8').replace(/^\uFEFF/,''));
fs.mkdirSync('assets/videos/_cand', { recursive: true });
fs.mkdirSync('assets/posts/_og', { recursive: true });
const decode = s => s.replace(/&amp;/g,'&').replace(/&quot;/g,'"');

for (const t of cands) {
  // og image poster
  try {
    const r = await fetch(t.url, { headers: { 'User-Agent':'Mozilla/5.0' } });
    const h = await r.text();
    const og = decode((h.match(/<meta property="og:image" content="([^"]+)"/)||[])[1] || '');
    if (og) {
      const ir = await fetch(og, { headers: { 'User-Agent':'Mozilla/5.0' } });
      fs.writeFileSync(path.join('assets/posts/_og', `${t.id}.jpg`), Buffer.from(await ir.arrayBuffer()));
    }
  } catch (e) { console.log('og fail', t.id, String(e)); }

  for (let i = 0; i < Math.min(8, t.candidates.length); i++) {
    try {
      const r = await fetch(t.candidates[i], { headers: { 'User-Agent':'Mozilla/5.0' } });
      const b = Buffer.from(await r.arrayBuffer());
      if (b.length < 5000) continue;
      fs.writeFileSync(path.join('assets/videos/_cand', `${t.id}_${i}.mp4`), b);
    } catch (e) { console.log('vid fail', t.id, i, String(e)); }
  }
  console.log('done', t.id);
}
