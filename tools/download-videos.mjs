import fs from 'node:fs';
import path from 'node:path';
const items = JSON.parse(fs.readFileSync('tools/videos.json', 'utf8').replace(/^\uFEFF/, ''));
fs.mkdirSync('assets/videos', { recursive: true });
for (const it of items) {
  const name = `${it.brand}-${it.index}.mp4`;
  try {
    const r = await fetch(it.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const b = Buffer.from(await r.arrayBuffer());
    fs.writeFileSync(path.join('assets/videos', name), b);
    console.log('OK', name, Math.round(b.length/1024)+'KB', r.headers.get('content-type'));
  } catch (e) { console.log('FAIL', name, String(e)); }
}
