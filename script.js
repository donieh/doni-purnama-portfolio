/* ==========================================================================
   Bilingual EN / ID toggle — Doni Purnama portfolio
   Default: English. Persists choice in localStorage and supports ?lang=id
   ========================================================================== */

const I18N = {
  en: {
    "skip": "Skip to work",
    "deck.coverTag": "PORTFOLIO · 2026",
    "hero.headline": "Content that earns attention",
    "deck.coverHeadline": "Content that earns attention.",
    "deck.coverSub": "Social media, content and client strategy for brands that want to be remembered.",
    "deck.approachTitle": "How I work",
    "deck.approach1": "Start with the brand voice, not the trend.",
    "deck.approach2": "Plan once, publish consistently, refine always.",
    "deck.approach3": "Treat every account like it's the only one.",
    "deck.thanks": "Thank you for your time.",
    "marquee": "IDEAS ✳ RESEARCH ✳ SCRIPT ✳ SHOOT ✳ EDIT ✳ DESIGN ✳ FEEDS ✳ CLIENTS ✳ REPEAT ✳ ",
    "rail.role": "Content maker / strategist",
    "status.available": "Available for work",
    "role.headline": "THE WHOLE PROCESS.",
    "role.clarify": "Verde Creative manages the accounts. I make the pieces.",
    "work.headline": "SELECTED WORK",
    "contact.headline": "LET'S MAKE SOMETHING VISIBLE.",
    "nav.about": "About", "nav.services": "My role", "nav.work": "Work",
    "nav.numbers": "Impact", "nav.hire": "Let's talk",

    "hero.note2": "Co-founder, Verde Creative · Content ideas, scripts, shooting, editing & feeds",
    "hero.badgeNum": "MADE", "hero.badgeLabel": "by me",
    "role.label": "02 — My role",
    "role.title": "I make the things people actually see.",
    "role.intro": "Verde Creative manages the accounts. Inside the studio, I own the content process end to end — from the first trend idea to the final feed layout. The four pieces shown for each brand below are work I made myself.",
    "role1.title": "Trend & idea research", "role1.body": "Finding the angle worth making — what the audience cares about right now.",
    "role2.title": "Scripting", "role2.body": "Writing the hook, the flow and the words that sound like the brand.",
    "role3.title": "Shooting", "role3.body": "Directing and capturing the footage, on location when the story needs it.",
    "role4.title": "Video editing", "role4.body": "Cutting, pacing, captions and sound for short-form that holds attention.",
    "role5.title": "Feed editing", "role5.body": "Designing carousels and grids so the whole feed reads as one brand.",
    "role6.title": "Publishing & scheduling", "role6.body": "Getting each piece out at the right moment, on every platform.",
    "work.title2": "Four pieces per brand. Made by me.",
    "work.intro2": "A small, honest selection of individual posts and reels. Open any piece to see it live.",
    "work.note": "Individual pieces I created as part of Verde Creative's work. The accounts are managed by the studio.",
    "viewPost": "View post ↗",
    "status.ongoing": "Ongoing", "status.completed": "Completed client",

    "hero.eyebrow": "Social Media & Content Strategist · Pontianak, Indonesia",
    "hero.title": "I turn everyday brands into accounts people actually care about.",
    "hero.lede": "I research the trend, write the script, shoot the footage, edit the video and shape the feed — the whole content process, piece by piece.",
    "hero.ctaWork": "See the work", "hero.ctaMail": "Get in touch",
    "hero.note": "Co-founder, Verde Creative · Open to roles & collaborations",
    "hero.badge": "brands managed",
    "hero.caption": "IDEAS · SCRIPT · SHOOT · EDIT",

    "stat.brands": "Brands managed", "stat.posts": "Posts published / month",
    "stat.renewed": "Clients who renewed", "stat.community": "Combined community",
    "stat.posts2": "Posts published every month",
    "stat.renewed2": "Clients who came back for more",
    "stat.community2": "People across managed accounts",

    "about.label": "01 — About",
    "about.title": "Part strategist, part maker, entirely people-first.",
    "about.p1": "I'm Doni Purnama — one of three Co-Founders of VERDE Creative, a creative agency in Pontianak, Indonesia. My two partners and I built it together and still work side by side, growing the agency as one team. Since 2023, I've handled content trend research, scriptwriting, short-form video editing, graphic design, and client relations for 7+ brands.",
    "about.p2": "Alongside running the agency, I remain active in live wedding event operations as an Event Runner at Sapphire Wedding Organization, building on an earlier foundation in fast-paced retail customer service at Miss Evelyn Cake & Pastry. Balancing both worlds shapes how I work: great creative output only lands when backed by clear communication, composure under pressure, and reliable follow-through.",
    "about.p3": "I hold a Bachelor's degree in Digital Business from Sabda Setia Institute of Technology and Business (GPA 3.90/4.00, full scholarship recipient) and work seamlessly in Bahasa Indonesia, English (PTE B2), and Teochew.",
    "about.cap": "Pontianak, West Kalimantan · Indonesia",
    "about.metaBased": "Based", "about.metaBasedVal": "Pontianak, ID",
    "about.metaLang": "Languages", "about.metaLangVal": "ID · EN · Teochew",
    "about.metaFocus": "Focus", "about.metaFocusVal": "Content · Video · Feed",

    "services.label": "02 — What I do",
    "services.title": "The craft behind the feed.",
    "services.intro": "A full-stack content partner for brands that need consistency without the chaos — from planning to publishing to the people on the other side of the screen.",
    "svc1.title": "Social media management", "svc1.body": "Strategy, account operations and day-to-day publishing across Instagram and TikTok.",
    "svc2.title": "Content creation", "svc2.body": "Captions, carousels, copy and creative direction that sound like your brand, not a bot.",
    "svc3.title": "Short-form video", "svc3.body": "Reels and TikToks planned, edited and optimised for attention that actually converts.",
    "svc4.title": "Editorial calendars", "svc4.body": "Monthly planning systems that keep seven accounts consistent, on-brand and on time.",
    "svc5.title": "Client & community care", "svc5.body": "Clear communication, honest feedback loops and relationships built to last.",
    "svc6.title": "Event & campaign content", "svc6.body": "On-the-ground content for events, launches and the moments a brand wants remembered.",

    "work.label": "03 — Selected work",
    "work.title": "Seven brands. Different worlds. One standard.",
    "work.intro": "A selection of accounts I plan, produce and grow through Verde Creative. Tap through to see the live work.",
    "years": "yrs", "year": "year", "months": "months", "followers": "followers",
    "viewAccount": "View account ↗",
    "brand1.sector": "Optical retail", "brand1.platform": "Instagram & TikTok",
    "brand1.desc": "Eyewear brand in Pontianak with licensed optometrists. Product education, testimonials and promotions with a clean, trustworthy visual system.",
    "brand2.sector": "Dental clinic", "brand2.platform": "Instagram & TikTok",
    "brand2.desc": "Patient education and trust-building content for a Pontianak dental practice — before/afters, dentist profiles and practical oral-care advice.",
    "brand3.sector": "Private villas", "brand3.platform": "Instagram",
    "brand3.desc": "A Bali-inspired private villa ecosystem in Kalimantan. Slow-living storytelling, room tours and community building for an exclusive property.",
    "brand4.sector": "Eye specialist", "brand4.platform": "Instagram",
    "brand4.desc": "Cataract and retina specialist. Approachable, educational eye-health content that makes clinical topics feel human and clear.",
    "brand5.sector": "Eye specialist", "brand5.platform": "Instagram",
    "brand5.desc": "Cataract, paediatric eye care and neuro-ophthalmology. Clear explainers and reassuring patient stories for a specialist practice.",
    "brand6.sector": "Optical retail", "brand6.platform": "Instagram & TikTok",
    "brand6.desc": "A trusted optical store serving Pontianak since 1992. Modernising a legacy brand with testimonials, product highlights and a warmer feed.",
    "brand7.sector": "Private school", "brand7.platform": "Instagram & TikTok", "brand7.tenure": "Ongoing",
    "brand7.desc": "A Christian school in Kubu Raya. Admissions, classroom activities and community storytelling that gives parents a real feel for the school.",

    "numbers.label": "04 — Impact",
    "numbers.title": "The work, in numbers.",
    "numbers.note": "Figures are based on accounts managed through Verde Creative and are verifiable on the live profiles linked above.",

    "contact.label": "04 — Contact",
    "contact.title": "Let's make your brand impossible to scroll past.",
    "contact.lede": "Open to full-time roles, retainers and collaborations in Indonesia and abroad. Tell me what you're building.",
    "contact.emailLabel": "Email", "contact.linkedinLabel": "LinkedIn",
    "contact.igLabel": "Agency", "contact.phoneLabel": "Phone",

    "foot.tag": "Content ideas · Script · Shoot · Edit", "foot.top": "Back to top ↑"
  },

  id: {
    "skip": "Lewati ke karya",
    "deck.coverTag": "PORTOFOLIO · 2026",
    "hero.headline": "Konten yang layak diperhatikan",
    "deck.coverHeadline": "Konten yang layak diperhatikan.",
    "deck.coverSub": "Media sosial, konten, dan strategi klien untuk brand yang ingin dikenang.",
    "deck.approachTitle": "Cara saya bekerja",
    "deck.approach1": "Mulai dari suara brand, bukan tren.",
    "deck.approach2": "Rencanakan sekali, terbitkan konsisten, selalu perbaiki.",
    "deck.approach3": "Perlakukan setiap akun seolah satu-satunya.",
    "deck.thanks": "Terima kasih atas waktunya.",
    "marquee": "IDE ✳ RISET ✳ NASKAH ✳ SYUTING ✳ EDIT ✳ DESAIN ✳ FEED ✳ KLIEN ✳ ULANG ✳ ",
    "rail.role": "Pembuat konten / strategist",
    "status.available": "Tersedia untuk kerja",
    "role.headline": "SELURUH PROSES.",
    "role.clarify": "Verde Creative yang mengelola akun. Aku yang membuat karyanya.",
    "work.headline": "KARYA PILIHAN",
    "contact.headline": "MARI BUAT SESUATU YANG TERLIHAT.",
    "nav.about": "Tentang", "nav.services": "Peran saya", "nav.work": "Karya",
    "nav.numbers": "Dampak", "nav.hire": "Mari bicara",

    "hero.note2": "Co-founder, Verde Creative · Ide konten, naskah, syuting, editing video & feed",
    "hero.badgeNum": "DIBUAT", "hero.badgeLabel": "oleh saya",
    "role.label": "02 — Peran saya",
    "role.title": "Aku yang membuat hal-hal yang benar-benar dilihat orang.",
    "role.intro": "Verde Creative yang mengelola akun. Di dalam studio, aku memegang proses konten dari awal hingga akhir — dari ide tren pertama sampai tata letak feed terakhir. Empat karya per brand di bawah ini semuanya dibuat olehku sendiri.",
    "role1.title": "Riset tren & ide", "role1.body": "Mencari sudut yang layak dibuat — apa yang sedang diperhatikan audiens.",
    "role2.title": "Penulisan naskah", "role2.body": "Menulis hook, alur, dan kata-kata yang terdengar seperti brandnya.",
    "role3.title": "Syuting", "role3.body": "Mengarahkan dan merekam footage, termasuk ke lokasi saat ceritanya membutuhkan.",
    "role4.title": "Editing video", "role4.body": "Memotong, mengatur ritme, subtitle, dan suara untuk short-form yang terus ditonton.",
    "role5.title": "Editing feed", "role5.body": "Mendesain carousel dan grid agar seluruh feed terbaca sebagai satu brand.",
    "role6.title": "Publikasi & penjadwalan", "role6.body": "Memastikan setiap karya tayang di waktu yang tepat di semua platform.",
    "work.title2": "Empat karya per brand. Dibuat olehku.",
    "work.intro2": "Pilihan kecil dan jujur dari postingan serta reel individual. Klik salah satu untuk melihatnya langsung.",
    "work.note": "Karya individual yang kubuat sebagai bagian dari Verde Creative. Akun dikelola oleh studio.",
    "viewPost": "Lihat karya ↗",
    "status.ongoing": "Berjalan", "status.completed": "Klien selesai",

    "hero.eyebrow": "Strategi Media Sosial & Konten · Pontianak, Indonesia",
    "hero.title": "Aku mengubah brand sehari-hari jadi akun yang benar-benar diperhatikan orang.",
    "hero.lede": "Aku mencari tren, menulis naskah, merekam footage, mengedit video, dan membentuk feed — seluruh proses konten, satu per satu.",
    "hero.ctaWork": "Lihat karya", "hero.ctaMail": "Hubungi saya",
    "hero.note": "Co-founder, Verde Creative · Terbuka untuk peran & kolaborasi",
    "hero.badge": "brand ditangani",
    "hero.caption": "IDE · NASKAH · SYUTING · EDIT",

    "stat.brands": "Brand yang ditangani", "stat.posts": "Konten / bulan",
    "stat.renewed": "Klien yang kembali", "stat.community": "Komunitas gabungan",
    "stat.posts2": "Konten diterbitkan setiap bulan",
    "stat.renewed2": "Klien yang kembali bekerja sama",
    "stat.community2": "Orang di seluruh akun yang ditangani",

    "about.label": "01 — Tentang",
    "about.title": "Setengah strategi, setengah kreator, sepenuhnya mengutamakan orang.",
    "about.p1": "Saya Doni Purnama — salah satu dari tiga Co-Founder VERDE Creative, agensi kreatif di Pontianak, Indonesia. Saya membangunnya bersama dua partner saya, dan kami bertiga tetap bekerja berdampingan untuk mengembangkan VERDE Creative bersama. Sejak 2023, saya menangani riset tren konten, penulisan naskah, editing video pendek, desain grafis, dan hubungan klien untuk lebih dari 7 brand.",
    "about.p2": "Di samping menjalankan agensi, saya tetap aktif dalam operasional acara pernikahan sebagai Event Runner di Sapphire Wedding Organization, membangun fondasi sebelumnya di layanan pelanggan ritel yang serba cepat di Miss Evelyn Cake & Pastry. Menyeimbangkan dua dunia ini membentuk cara kerja saya: karya kreatif yang hebat hanya berdampak jika didukung komunikasi yang jelas, tenang di bawah tekanan, dan tindak lanjut yang bisa diandalkan.",
    "about.p3": "Saya meraih gelar Sarjana Bisnis Digital dari Institut Teknologi dan Bisnis Sabda Setia (IPK 3,90/4,00, penerima beasiswa penuh) dan bekerja dengan lancar dalam Bahasa Indonesia, Inggris (PTE B2), dan Teochew.",
    "about.cap": "Pontianak, Kalimantan Barat · Indonesia",
    "about.metaBased": "Berdomicili", "about.metaBasedVal": "Pontianak, ID",
    "about.metaLang": "Bahasa", "about.metaLangVal": "ID · EN · Teochew",
    "about.metaFocus": "Fokus", "about.metaFocusVal": "Konten · Video · Feed",

    "services.label": "02 — Yang saya lakukan",
    "services.title": "Kerajinan di balik feed.",
    "services.intro": "Mitra konten menyeluruh untuk brand yang butuh konsistensi tanpa kekacauan — dari perencanaan, publikasi, hingga orang di sebalik layar.",
    "svc1.title": "Manajemen media sosial", "svc1.body": "Strategi, operasional akun, dan publikasi harian di Instagram dan TikTok.",
    "svc2.title": "Pembuatan konten", "svc2.body": "Caption, carousel, copy, dan arah kreatif yang terdengar seperti brandmu, bukan robot.",
    "svc3.title": "Video pendek", "svc3.body": "Reels dan TikTok yang direncanakan, diedit, dan dioptimalkan untuk menarik perhatian yang menghasilkan.",
    "svc4.title": "Kalender editorial", "svc4.body": "Sistem perencanaan bulanan yang menjaga tujuh akun tetap konsisten, sesuai brand, dan tepat waktu.",
    "svc5.title": "Perawatan klien & komunitas", "svc5.body": "Komunikasi yang jelas, feedback yang jujur, dan relasi yang dibangun untuk jangka panjang.",
    "svc6.title": "Konten acara & kampanye", "svc6.body": "Konten langsung di lokasi untuk acara, peluncuran, dan momen yang ingin dikenang brand.",

    "work.label": "03 — Karya pilihan",
    "work.title": "Tujuh brand. Dunia berbeda. Satu standar.",
    "work.intro": "Sebagian akun yang saya rencanakan, produksi, dan kembangkan lewat Verde Creative. Klik untuk melihat karyanya langsung.",
    "years": "thn", "year": "tahun", "months": "bulan", "followers": "pengikut",
    "viewAccount": "Lihat akun ↗",
    "brand1.sector": "Toko optik", "brand1.platform": "Instagram & TikTok",
    "brand1.desc": "Brand kacamata di Pontianak dengan optometris berizin. Edukasi produk, testimoni, dan promosi dengan sistem visual yang bersih dan dipercaya.",
    "brand2.sector": "Klinik gigi", "brand2.platform": "Instagram & TikTok",
    "brand2.desc": "Edukasi pasien dan konten pembangun kepercayaan untuk praktik gigi di Pontianak — before/after, profil dokter, dan saran perawatan gigi yang praktis.",
    "brand3.sector": "Villa privat", "brand3.platform": "Instagram",
    "brand3.desc": "Ekosistem villa privat bergaya Bali di Kalimantan. Storytelling slow living, room tour, dan pembangunan komunitas untuk properti eksklusif.",
    "brand4.sector": "Dokter mata", "brand4.platform": "Instagram",
    "brand4.desc": "Spesialis katarak dan retina. Konten kesehatan mata yang ramah dan edukatif sehingga topik medis terasa manusiawi dan jelas.",
    "brand5.sector": "Dokter mata", "brand5.platform": "Instagram",
    "brand5.desc": "Katarak, perawatan mata anak, dan neuro-oftalmologi. Penjelasan yang jelas serta kisah pasien yang menenangkan untuk praktik spesialis.",
    "brand6.sector": "Toko optik", "brand6.platform": "Instagram & TikTok",
    "brand6.desc": "Toko optik terpercaya yang melayani Pontianak sejak 1992. Memperbarui brand legendaris lewat testimoni, sorotan produk, dan feed yang lebih hangat.",
    "brand7.sector": "Sekolah swasta", "brand7.platform": "Instagram & TikTok", "brand7.tenure": "Berjalan",
    "brand7.desc": "Sekolah Kristen di Kubu Raya. Penerimaan siswa, aktivitas kelas, dan storytelling komunitas yang memberi orang tua gambaran nyata tentang sekolah.",

    "numbers.label": "04 — Dampak",
    "numbers.title": "Karyanya, dalam angka.",
    "numbers.note": "Angka didasarkan pada akun yang ditangani melalui Verde Creative dan dapat diverifikasi pada profil langsung di atas.",

    "contact.label": "04 — Kontak",
    "contact.title": "Mari buat brandmu tak bisa dilewati.",
    "contact.lede": "Terbuka untuk peran full-time, retainer, dan kolaborasi di dalam maupun luar negeri. Ceritakan apa yang sedang kamu bangun.",
    "contact.emailLabel": "Email", "contact.linkedinLabel": "LinkedIn",
    "contact.igLabel": "Agensi", "contact.phoneLabel": "Telepon",

    "foot.tag": "Ide konten · Naskah · Syuting · Edit", "foot.top": "Kembali ke atas ↑"
  }
};

(function () {
  const root = document.documentElement;
  const toggle = document.getElementById('langToggle');
  const params = new URLSearchParams(location.search);
  let lang = params.get('lang');
  if (!['en', 'id'].includes(lang)) {
    lang = localStorage.getItem('dp-lang') || 'en';
  }

  function apply(next) {
    lang = next;
    root.lang = lang;
    const dict = I18N[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.title = lang === 'id'
      ? 'Doni Purnama — Pembuat Konten & Strategist'
      : 'Doni Purnama — Content maker & strategist';
    try { localStorage.setItem('dp-lang', lang); } catch (e) {}
  }

  apply(lang);
  if (toggle) {
    toggle.addEventListener('click', function () {
      apply(lang === 'en' ? 'id' : 'en');
    });
  }
})();

/* ==========================================================================
   Autoplay video previews.
   Videos are NOT downloaded until they are close to the viewport (data-src).
   This keeps the initial page light and lets every reel start reliably.
   All files are H.264 / yuv420p with fast-start for broad browser support.
   ========================================================================== */
(function () {
  var videos = Array.prototype.slice.call(document.querySelectorAll('video.post-video'));
  if (!videos.length) return;

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function load(v) {
    if (v.dataset.loaded) return;
    var src = v.getAttribute('data-src');
    if (!src) return;
    v.dataset.loaded = '1';
    v.src = src;
    v.load();
  }

  function play(v) {
    if (reduceMotion || document.hidden) return;
    v.muted = true;
    var p = v.play();
    if (p && typeof p.catch === 'function') p.catch(function () {});
  }

  function inView(v) {
    var r = v.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  }

  videos.forEach(function (v) {
    v.muted = true;
    v.setAttribute('playsinline', '');
  });

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          load(e.target);
          play(e.target);
        } else {
          e.target.pause();
        }
      });
    }, { rootMargin: '300px 0px', threshold: 0.01 });
    videos.forEach(function (v) { io.observe(v); });
  } else {
    videos.forEach(function (v) { load(v); });
  }

  document.addEventListener('visibilitychange', function () {
    videos.forEach(function (v) {
      if (document.hidden) v.pause();
      else if (inView(v)) play(v);
    });
  });
})();

/* ==========================================================================
   Motion: staggered reveal on scroll + a thin scroll-progress bar.
   The .reveal class comes from the markup; if JS fails to initialise, a
   fallback timer shows everything so content is never left hidden.
   ========================================================================== */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  if (!items.length) return;

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Safety net: if anything never intersects (or JS errors later), show it.
  window.setTimeout(function () {
    items.forEach(function (el) { el.classList.add('in'); });
  }, 3000);

  var bar = document.querySelector('.progress');
  if (!bar) return;
  var ticking = false;

  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = 'scaleX(' + Math.max(0, Math.min(1, p)) + ')';
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(update);
    }
  }, { passive: true });
  window.addEventListener('resize', update, { passive: true });
  update();
})();
