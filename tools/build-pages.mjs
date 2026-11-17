import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('tools/final-posts.json', 'utf8'));
const postFiles = fs.readdirSync('assets/posts');
const videoFiles = fs.readdirSync('assets/videos');

const postId = url => (url.match(/\/(?:p|reel)\/([^/?]+)/) || [])[1] || '';
const imgFor = url => `assets/posts/${postId(url)}.jpg`;
const vidFor = url => {
  const n = `${postId(url)}.mp4`;
  return videoFiles.includes(n) ? `assets/videos/${n}` : null;
};
const label = it => it.labelOverride || it.kind;

/* ---------------- website work blocks ---------------- */
let workHtml = '';
data.brands.forEach((b, bi) => {
  workHtml += `\n      <!-- ${b.name} -->\n      <article class="brand-block">\n`;
  workHtml += `        <div class="brand-bar"><span class="brand-idx">${String(bi + 1).padStart(2, '0')}</span><h3>${b.name}</h3><p><span data-i18n="${b.sectorKey}">${b.sectorKey}</span> · <span data-i18n="${b.platformKey}">${b.platformKey}</span></p><span class="tag" data-i18n="${b.statusKey}">${b.statusKey}</span></div>\n`;
  workHtml += `        <div class="post-grid">\n`;
  b.items.forEach((it, i) => {
    const img = imgFor(it.url);
    const isReel = (it.labelOverride || it.kind) === 'reel';
    const vid = isReel ? vidFor(it.url) : null;
    const boxClass = (isReel && !vid ? 'post-img reel-still' : 'post-img') + (postId(it.url) === 'DaRvP30yWvC' ? ' letterbox' : '');
    const media = vid
      ? `<video class="post-video" src="${vid}" poster="${img}" autoplay muted loop playsinline preload="auto"></video>`
      : `<img src="${img}" alt="${b.name} ${label(it)}" loading="lazy" />`;
    workHtml += `          <a class="post" href="${it.url}" target="_blank" rel="noopener"><div class="${boxClass}">${media}<span class="kind">${label(it)}</span></div><p class="caption">${it.caption}</p><span class="post-link" data-i18n="viewPost">View post ↗</span></a>\n`;
  });
  workHtml += `        </div>\n      </article>\n`;
});

/* ---------------- deck slides ---------------- */
let slides = '';
data.brands.forEach((b, bi) => {
  slides += `\n<!-- ${bi + 4} — ${b.name} -->\n<section class="slide ${bi % 2 === 1 ? 'dark ' : ''}brand-slide">\n`;
  slides += `  <span class="slide-num">${bi + 4}</span>\n  <p class="slide-tag" data-i18n="work.label">03 — Selected work</p>\n`;
  slides += `  <h2>${b.name} <span class="status-pill" data-i18n="${b.statusKey}">${b.statusKey}</span></h2>\n`;
  slides += `  <p class="brand-meta"><span data-i18n="${b.sectorKey}">${b.sectorKey}</span> · <span data-i18n="${b.platformKey}">${b.platformKey}</span></p>\n`;
  slides += `  <div class="post-row">\n`;
  b.items.forEach((it, i) => {
    const img = imgFor(it.url);
    const r = 0; // ratio assigned by add-ratios script
    slides += `    <div class="pcard"><div class="img"><img src="${img}" alt="" /><span class="kind">${label(it)}</span></div><p class="cap">${it.caption}</p><span class="src">instagram.com/${it.url.includes('/reel/') ? 'reel' : 'p'}/${it.url.match(/\/(?:p|reel)\/([^/?]+)/)?.[1] || ''}/</span></div>\n`;
  });
  slides += `  </div>\n  <div class="footer-line"><span>${b.name}</span><span>${String(bi + 1).padStart(2, '0')} / 07</span></div>\n</section>\n`;
});

/* ---------------- rebuild index.html ---------------- */
let index = fs.readFileSync('index.html', 'utf8');
const process6 = `    <div class="process">
      <div class="step"><span>01</span><h3 data-i18n="role1.title">Trend &amp; idea research</h3><p data-i18n="role1.body">Finding the angle worth making — what the audience cares about right now.</p></div>
      <div class="step"><span>02</span><h3 data-i18n="role2.title">Scripting</h3><p data-i18n="role2.body">Writing the hook, the flow and the words that sound like the brand.</p></div>
      <div class="step"><span>03</span><h3 data-i18n="role3.title">Shooting</h3><p data-i18n="role3.body">Directing and capturing the footage, on location when the story needs it.</p></div>
      <div class="step"><span>04</span><h3 data-i18n="role4.title">Video editing</h3><p data-i18n="role4.body">Cutting, pacing, captions and sound for short-form that holds attention.</p></div>
      <div class="step"><span>05</span><h3 data-i18n="role5.title">Feed editing</h3><p data-i18n="role5.body">Designing carousels and grids so the whole feed reads as one brand.</p></div>
      <div class="step"><span>06</span><h3 data-i18n="role6.title">Publishing &amp; scheduling</h3><p data-i18n="role6.body">Getting each piece out at the right moment, on every platform.</p></div>
    </div>`;
index = index.replace(/    <div class="process">[\s\S]*?\n    <\/div>/, process6);
const workStart = index.indexOf('      <article class="brand-block">');
const workEnd = index.indexOf('    <p class="work-note');
if (workStart > -1 && workEnd > workStart) index = index.slice(0, workStart) + workHtml + index.slice(workEnd);
index = index.replace('class="work-note data-i18n=', 'class="work-note" data-i18n=');
const contactLinks = `      <div class="contact-links">
        <a href="mailto:doniprnma@gmail.com"><span data-i18n="contact.emailLabel">Email</span><strong>doniprnma@gmail.com</strong><i>↗</i></a>
        <a href="https://www.linkedin.com/in/donipurnama04/" target="_blank" rel="noopener"><span data-i18n="contact.linkedinLabel">LinkedIn</span><strong>linkedin.com/in/donipurnama04</strong><i>↗</i></a>
        <a href="https://au.seek.com/profiles/doni-purnama-0tkfwmpjw2" target="_blank" rel="noopener"><span>Seek</span><strong>donipurnama-0tkfwmpjw2</strong><i>↗</i></a>
        <a href="https://www.instagram.com/verdecreative/" target="_blank" rel="noopener"><span data-i18n="contact.igLabel">Studio</span><strong>@verdecreative</strong><i>↗</i></a>
        <a href="tel:+6285157572367"><span data-i18n="contact.phoneLabel">Phone</span><strong>+62 851-5757-2367</strong><i>↗</i></a>
      </div>`;
index = index.replace(/    <div class="contact-links">[\s\S]*?\n    <\/div>/, contactLinks);
fs.writeFileSync('index.html', index);

/* ---------------- rebuild deck.html ---------------- */
let deck = fs.readFileSync('deck.html', 'utf8');
const roleDeck = `  <div class="role-deck">
    <div class="step"><span class="n">01</span><h3 data-i18n="role1.title">Trend &amp; idea research</h3><p data-i18n="role1.body">Finding the angle worth making — what the audience cares about right now.</p></div>
    <div class="step"><span class="n">02</span><h3 data-i18n="role2.title">Scripting</h3><p data-i18n="role2.body">Writing the hook, the flow and the words that sound like the brand.</p></div>
    <div class="step"><span class="n">03</span><h3 data-i18n="role3.title">Shooting</h3><p data-i18n="role3.body">Directing and capturing the footage, on location when the story needs it.</p></div>
    <div class="step"><span class="n">04</span><h3 data-i18n="role4.title">Video editing</h3><p data-i18n="role4.body">Cutting, pacing, captions and sound for short-form that holds attention.</p></div>
    <div class="step"><span class="n">05</span><h3 data-i18n="role5.title">Feed editing</h3><p data-i18n="role5.body">Designing carousels and grids so the whole feed reads as one brand.</p></div>
    <div class="step"><span class="n">06</span><h3 data-i18n="role6.title">Publishing &amp; scheduling</h3><p data-i18n="role6.body">Getting each piece out at the right moment, on every platform.</p></div>
  </div>`;
deck = deck.replace(/  <div class="role-deck">[\s\S]*?\n  <\/div>/, roleDeck);
deck = deck.replace(/\n<!-- 4 — OPTIPRO -->[\s\S]*?\n<!-- 11 — CONTACT -->/, slides + '\n<!-- 11 — CONTACT -->');
const deckContact = `    <div class="contact-list">
      <a href="mailto:doniprnma@gmail.com"><span data-i18n="contact.emailLabel">Email</span><strong>doniprnma@gmail.com</strong><i>↗</i></a>
      <a href="https://www.linkedin.com/in/donipurnama04/"><span data-i18n="contact.linkedinLabel">LinkedIn</span><strong>linkedin.com/in/donipurnama04</strong><i>↗</i></a>
      <a href="https://au.seek.com/profiles/doni-purnama-0tkfwmpjw2"><span>Seek</span><strong>donipurnama-0tkfwmpjw2</strong><i>↗</i></a>
      <a href="https://www.instagram.com/verdecreative/"><span data-i18n="contact.igLabel">Studio</span><strong>@verdecreative</strong><i>↗</i></a>
    </div>`;
deck = deck.replace(/  <div class="contact-list">[\s\S]*?\n  <\/div>/, deckContact);
fs.writeFileSync('deck.html', deck);

console.log('built:', workHtml.length, 'chars; videos in workHtml:', (workHtml.match(/<video/g)||[]).length, '; work marker found:', index.includes('<!-- OPTIPRO -->'));
