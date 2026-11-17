import fs from 'node:fs';
import path from 'node:path';
const items = JSON.parse(fs.readFileSync('tools/carousel-fix.json', 'utf8').replace(/^\uFEFF/, ''));
for (const it of items) {
  const r = await fetch(it.src, { headers: { 'User-Agent': 'Mozilla/5.0' } });
  const b = Buffer.from(await r.arrayBuffer());
  for (const ext of ['jpg', 'webp', 'png']) {
    const p = path.join('assets/posts', `${it.brand}-${it.index}.${ext}`);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }
  fs.writeFileSync(path.join('assets/posts', `${it.brand}-${it.index}.jpg`), b);
  console.log('OK', `${it.brand}-${it.index}.jpg`, `${it.w}x${it.h}`, Math.round(b.length/1024)+'KB');
}
