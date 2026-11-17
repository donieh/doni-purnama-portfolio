import fs from 'node:fs';
import path from 'node:path';

let raw = fs.readFileSync('tools/posts-native.json', 'utf8').replace(/^\uFEFF/, '');
const items = JSON.parse(raw);
const OUT = path.resolve('assets/posts');

for (const it of items) {
  if (!it.src) { console.log('NO SRC', it.brand, it.index); continue; }
  try {
    const r = await fetch(it.src, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const b = Buffer.from(await r.arrayBuffer());
    const ext = it.src.includes('.webp') ? 'webp' : 'jpg';
    // replace any existing square crop
    for (const e of ['jpg', 'webp', 'png']) {
      const old = path.join(OUT, `${it.brand}-${it.index}.${e}`);
      if (fs.existsSync(old)) fs.unlinkSync(old);
    }
    fs.writeFileSync(path.join(OUT, `${it.brand}-${it.index}.${ext}`), b);
    console.log('OK', `${it.brand}-${it.index}.${ext}`, `${it.w}x${it.h}`, Math.round(b.length / 1024) + 'KB');
  } catch (e) { console.log('FAIL', it.brand, it.index, String(e)); }
}
