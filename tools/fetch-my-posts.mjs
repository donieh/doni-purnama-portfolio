import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('assets/posts');
fs.mkdirSync(OUT, { recursive: true });

const groups = [
  { slug: 'optipro', name: 'Optipro', items: [
    'https://www.instagram.com/p/Da74zwTmbcS/?img_index=1',
    'https://www.instagram.com/p/DdROAgCmZDi/?img_index=3',
    'https://www.instagram.com/reel/DaLLecQReRW/',
  ]},
  { slug: 'cempaka', name: 'Cempaka Dental Studio', items: [
    'https://www.instagram.com/p/DPQMQFjD1C3/',
    'https://www.instagram.com/reel/DeYyELCvJHh/',
    'https://www.instagram.com/p/DXWYFOCjx80/?img_index=3',
  ]},
  { slug: 'ubud-borneo', name: 'Ubud Borneo', items: [
    'https://www.instagram.com/reel/DWa8Dw_EhLR/',
    'https://www.instagram.com/reel/DaRvP30yWvC/',
    'https://www.instagram.com/reel/DctDdmzSOQU/',
  ]},
  { slug: 'dr-wirawan', name: 'Dr Wirawan', items: [
    'https://www.instagram.com/p/DfE5yi9yfgB/',
    'https://www.instagram.com/p/DfbUUpUErb5/?img_index=1',
    'https://www.instagram.com/reel/DY6Nvt7yqUh/',
  ]},
  { slug: 'dr-asro', name: 'Dr Asro', items: [
    'https://www.instagram.com/p/DeBgzTdIHwX/?img_index=1',
    'https://www.instagram.com/reel/DfJnPOdRYwI/',
    'https://www.instagram.com/reel/De8y4ZMxbE8/',
  ]},
  { slug: 'kenaan', name: 'Sekolah Kristen Kanaan', items: [
    'https://www.instagram.com/p/DThGoBOEanP/?img_index=4',
    'https://www.instagram.com/p/DVC4ZAzAW9s/?img_index=1',
    'https://www.instagram.com/p/DW0GMixBDAG/',
  ]},
  { slug: 'sinar-baru', name: 'Optik Sinar Baru', items: [
    'https://www.instagram.com/p/DX1UjK6kUey/',
    'https://www.instagram.com/reel/DQBZbekACpr/',
    'https://www.instagram.com/p/DR3u4tQkpgA/',
  ]},
];

const decode = (s = '') => s
  .replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&')
  .replace(/&#x1f4cd;/g, '📍').replace(/&#x1f4de;/g, '📞')
  .replace(/\\n/g, ' ').replace(/\s+/g, ' ').trim();

const meta = [];

for (const g of groups) {
  for (let i = 0; i < g.items.length; i++) {
    const url = g.items[i];
    const kind = url.includes('/reel/') ? 'Reel' : 'Post';
    try {
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      const rawImg = (html.match(/<meta property="og:image" content="([^"]+)"/) || [])[1];
      const rawDesc = (html.match(/<meta property="og:description" content="([^"]+)"/) || [])[1] || '';
      const caption = decode(rawDesc).replace(/^\d+ likes?, \d+ comments? - \S+ on [^:]+:\s*"/, '').replace(/"\.\s*$/, '');
      let saved = '';
      if (rawImg) {
        const imgUrl = decode(rawImg);
        const ir = await fetch(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } });
        const buf = Buffer.from(await ir.arrayBuffer());
        const file = `${g.slug}-${i + 1}.jpg`;
        fs.writeFileSync(path.join(OUT, file), buf);
        saved = `assets/posts/${file}`;
        console.log('OK', file, buf.length);
      }
      meta.push({ brand: g.slug, brandName: g.name, index: i + 1, kind, url, image: saved, caption });
    } catch (e) {
      console.log('FAIL', g.slug, i + 1, String(e));
      meta.push({ brand: g.slug, brandName: g.name, index: i + 1, kind, url, image: '', caption: '' });
    }
  }
}

fs.writeFileSync('tools/posts-meta.json', JSON.stringify(meta, null, 2));
console.log('done', meta.length);
