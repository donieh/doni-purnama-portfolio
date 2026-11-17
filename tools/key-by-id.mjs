import fs from 'node:fs';
import path from 'node:path';
const map = {
  // brand slug: [old image index for each new item]
  'optipro': [4,3,1,2],
  'cempaka': [1,2,3,4],
  'ubud-borneo': [1,2,3,4],
  'dr-wirawan': [1,3,2,4],
  'dr-asro': [1,2,3,4],
  'kenaan': [1,3,2,4],
  'sinar-baru': [1,2,3,4]
};
const data = JSON.parse(fs.readFileSync('tools/final-posts.json','utf8'));
const OUT='assets/posts';
for (const b of data.brands) {
  const order = map[b.slug] || [1,2,3,4];
  b.items.forEach((it,i)=>{
    const oldIdx = order[i];
    const id = (it.url.match(/\/(?:p|reel)\/([^/?]+)/)||[])[1];
    if (!id) return;
    let src=null;
    for (const ext of ['jpg','webp','png']) {
      const p = path.join(OUT, `${b.slug}-${oldIdx}.${ext}`);
      if (fs.existsSync(p)) { src=p; break; }
    }
    if (src) { fs.copyFileSync(src, path.join(OUT, `${id}.jpg`)); console.log('IMG',id,'<-',path.basename(src)); }
    else console.log('NO IMG',b.slug,i,id);
  });
}
