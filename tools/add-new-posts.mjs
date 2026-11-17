import fs from 'node:fs';
const meta = JSON.parse(fs.readFileSync('tools/posts-meta.json', 'utf8'));
const additions = [
  { brand:'optipro', brandName:'Optipro', url:'https://www.instagram.com/p/DSjpv-ZkyWi/?img_index=1', kind:'feed (carousel)' },
  { brand:'cempaka', brandName:'Cempaka Dental Studio', url:'https://www.instagram.com/reel/DUxWRo-D7Lp/', kind:'reel' },
  { brand:'ubud-borneo', brandName:'Ubud Borneo', url:'https://www.instagram.com/reel/DYHMs8OyOPj/', kind:'reel' },
  { brand:'dr-wirawan', brandName:'Dr Wirawan', url:'https://www.instagram.com/p/Dbvd_6wSj9p/', kind:'reel' },
  { brand:'dr-asro', brandName:'Dr Asro', url:'https://www.instagram.com/p/DfRJ9yCoDSh/?img_index=1', kind:'feed (carousel)' },
  { brand:'sinar-baru', brandName:'Optik Sinar Baru', url:'https://www.instagram.com/p/DXgL7viAK5k/', kind:'reel' },
  { brand:'kenaan', brandName:'Sekolah Kristen Kanaan', url:'https://www.instagram.com/reel/DQVQh6igYvw/', kind:'reel' },
];
for (const a of additions) {
  if (meta.some(m => m.url === a.url)) continue;
  meta.push({ ...a, index: 4, image: '', caption: '' });
}
fs.writeFileSync('tools/posts-meta.json', JSON.stringify(meta, null, 2));
console.log('posts:', meta.length);
