import fs from 'node:fs';
const data = JSON.parse(fs.readFileSync('tools/final-posts.json','utf8'));
const cls = new Map();
for (const b of data.brands) {
  for (const it of b.items) {
    const id = (it.url.match(/\/(?:p|reel)\/([^/?]+)/) || [])[1];
    const kind = it.labelOverride || it.kind;
    cls.set(id, kind === 'reel' ? 'ar916' : 'ar45');
  }
}
// DaRvP30yWvC: letterbox a 16:9-looking reel inside a 9:16 frame
let html = fs.readFileSync('deck.html','utf8');
html = html.replace(/<div class="pcard[^"]*">(<div class="img"><img src="assets\/posts\/([^/"]+)\.jpg")/g, (full, rest, id) => {
  return `<div class="pcard ${cls.get(id) || 'ar45'}${id === 'DaRvP30yWvC' ? ' letterbox' : ''}">${rest}`;
});
fs.writeFileSync('deck.html', html);
console.log('tagged', (html.match(/class="pcard ar/g)||[]).length, 'cards');
