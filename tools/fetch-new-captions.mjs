const urls = [
  ["optipro", "https://www.instagram.com/p/DSjpv-ZkyWi/?img_index=1"],
  ["cempaka", "https://www.instagram.com/reel/DUxWRo-D7Lp/"],
  ["ubud-borneo", "https://www.instagram.com/reel/DYHMs8OyOPj/"],
  ["dr-wirawan", "https://www.instagram.com/p/Dbvd_6wSj9p/"],
  ["dr-asro", "https://www.instagram.com/p/DfRJ9yCoDSh/?img_index=1"],
  ["sinar-baru", "https://www.instagram.com/p/DXgL7viAK5k/"],
  ["kenaan", "https://www.instagram.com/reel/DQVQh6igYvw/"],
];
const decode = (s='') => s.replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/\\n/g,' ').replace(/\s+/g,' ').trim();
for (const [brand, url] of urls) {
  try {
    const r = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    const h = await r.text();
    const d = (h.match(/<meta property="og:description" content="([^"]+)"/)||[])[1] || '';
    const cap = decode(d).replace(/^\d+ likes?, \d+ comments? - \S+ on [^:]+:\s*"/, '').replace(/"\.\s*$/, '');
    console.log('\n' + brand + ' :: ' + url);
    console.log(cap.slice(0, 320));
  } catch (e) { console.log('FAIL', brand, String(e)); }
}
