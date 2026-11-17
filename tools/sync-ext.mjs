import fs from 'node:fs';

const files = new Set(fs.readdirSync('assets/posts'));
for (const file of ['index.html', 'deck.html']) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/assets\/posts\/([a-z-]+)-(\d+)\.(jpg|webp|png)/g, (full, brand, idx) => {
    for (const ext of ['jpg', 'webp', 'png']) {
      const name = `${brand}-${idx}.${ext}`;
      if (files.has(name)) return `assets/posts/${name}`;
    }
    return full;
  });
  fs.writeFileSync(file, html);
  console.log('synced', file);
}
