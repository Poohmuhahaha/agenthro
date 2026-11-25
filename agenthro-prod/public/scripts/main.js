/* AGENTHRO website: progressive enhancement. Content works without JS. */
(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- i18n (EN default in HTML; TH dictionary here) ---------- */
  var TH = {
    'skip': 'ข้ามไปยังเนื้อหา',
    'nav.research': 'งานวิจัย', 'nav.works': 'ผลงาน', 'nav.services': 'บริการ', 'nav.events': 'กิจกรรม', 'nav.sponsorship': 'สนับสนุน', 'nav.people': 'ทีมงาน', 'nav.about': 'เกี่ยวกับเรา', 'nav.blog': 'บล็อก', 'nav.menu': 'เมนู',
    'hero.title': 'อะไรทำให้สิ่งหนึ่งเป็น “เอเจนต์”?',
    'hero.cta1': 'สำรวจผลงานคัดสรร', 'hero.cta2': 'การสนับสนุน',
    'research.eyebrow': 'คำถามของเรา',
    'research.title': 'ทำความเข้าใจมนุษย์ ผ่านเอเจนต์ที่เราสร้าง จินตนาการ และอยู่ร่วมด้วย',
    'research.lede': 'Agenthropology เป็นแนวคิดการวิจัยที่เสนอขึ้น เพื่อศึกษามนุษย์ผ่านความสัมพันธ์ที่ผู้คนสร้างขึ้นกับเอเจนต์ทั้งที่เป็นปัญญาประดิษฐ์และที่เกิดจากจินตนาการ',
    'research.foundation': 'รากฐาน 3A',
    'research.agents': 'ระบบ ตัวละคร หรือสิ่งที่เราออกแบบหรือจินตนาการว่าสามารถกระทำการได้ด้วยตัวเอง',
    'research.anthro': 'การศึกษามนุษย์ วัฒนธรรม ความหมาย และวิถีปฏิบัติในชีวิตประจำวัน',
    'research.agency': 'ความสามารถในการกระทำ เลือก และตัดสินใจ ถูกแบ่งปันระหว่างมนุษย์กับเอเจนต์อย่างไร',
    'research.themesTitle': 'สี่ประเด็นการวิจัย',
    'research.themesNote': 'ประเด็น 4A เป็นแนวการศึกษาคู่ขนานกัน ไม่ใช่ลำดับขั้น คะแนน หรือมาตรวัดเชิงวินิจฉัยที่ผ่านการรับรองแล้ว',
    'theme.attribution': 'ผู้คนรับรู้จิตใจ เจตนา และความสามารถของเอเจนต์อย่างไร',
    'theme.attachment': 'ความสัมพันธ์ ความไว้วางใจ และความผูกพัน อาจก่อตัวขึ้นระหว่างคนกับเอเจนต์อย่างไร',
    'theme.authority': 'การตัดสินใจและการควบคุมถูกมอบหมาย แบ่งปัน หรือดึงกลับคืนมาอย่างไร',
    'theme.adaptation': 'ผู้คนและระบบเปลี่ยนแปลงไปด้วยกันตามกาลเวลาอย่างไร',
    'works.title': 'ผลงานคัดสรร', 'works.lede': 'ต้นแบบเชิงกายภาพและดิจิทัลในประเด็นวิจัยทั้ง 4A',
    'works.cap1': 'ผลงาน', 'works.cap2': 'คัดสรร',
    'works.physical': 'กายภาพ (Physical)', 'works.digital': 'ดิจิทัล (Digital)',
    'works.oatVideo': 'วิดีโอสาธิตบน YouTube Shorts', 'works.spacechiDoc': 'เอกสารโครงการ (Drive)',
    'works.go': 'ไปที่หน้าเว็บ',
    'services.title': 'บริการ', 'services.lede': 'งานวิจัยประยุกต์ รายงานทางวิทยาศาสตร์ และการสร้างต้นแบบอย่างรวดเร็วสำหรับทีมที่พัฒนาหรือประเมินเอเจนต์',
    'services.s1': 'Agent Scientific Report',
    'services.s1desc': 'การประเมินทางวิทยาศาสตร์และรายงานปฏิสัมพันธ์ระหว่างมนุษย์กับเอเจนต์สำหรับโครงการของคุณ',
    'services.s2': 'Agent Fast Prototyping and Report',
    'services.s2desc': 'การสร้างต้นแบบเอเจนต์อย่างรวดเร็วพร้อมรายงานการประเมินสำหรับโครงการของคุณ',
    'services.perProject': 'ต่อโครงการ', 'services.cta': 'ติดต่อขอใช้บริการ',
    'events.title': 'กิจกรรมคัดสรร', 'events.lede': 'แฮกกาธอน เวิร์กช็อป และการสื่อสารวิทยาศาสตร์',
    'events.hackTitle': 'แฮกกาธอนและเวิร์กช็อป', 'events.sciTitle': 'การสื่อสารวิทยาศาสตร์',
    'events.yt1': 'วิดีโอสื่อสารวิทยาศาสตร์ 1 (YouTube)', 'events.yt2': 'วิดีโอสื่อสารวิทยาศาสตร์ 2 (YouTube)', 'events.ytLive': 'ไลฟ์สื่อสารวิทยาศาสตร์ (YouTube)',
    'sponsor.title': 'การสนับสนุน', 'sponsor.lede': 'ระยะเวลา 2 เดือน ระดับที่สูงกว่าจะได้รับสิทธิประโยชน์ของระดับที่ต่ำกว่าทั้งหมดด้วย',
    'sponsor.vip': 'เร็ว ๆ นี้', 'sponsor.imp1': 'บริการฟรี 2 ครั้ง', 'sponsor.imp2': 'สามารถถือหุ้นได้ 2 Project StartUp', 'sponsor.imp3': 'ใช้แพลตฟอร์มพัฒนาของโครงการริเริ่มได้ฟรี', 'sponsor.includesLower': 'รวมสิทธิประโยชน์ของ Premium และ Partnership ทั้งหมด',
    'sponsor.prem1': 'ร่วมพัฒนา 2 โครงการ (Co-Dev 2 Project)', 'sponsor.prem2': 'ได้รับชื่อผู้สนับสนุนในทุกกิจกรรม CIA CreativeLab × UTCC', 'sponsor.includesPart': 'รวมสิทธิประโยชน์ของ Partnership ทั้งหมด',
    'sponsor.part1': 'สิทธิ์ใช้งานแพลตฟอร์มที่ได้รับอนุญาตของกลุ่มเป็นกลุ่มแรก', 'sponsor.part2': 'ร่วมใช้ทรัพยากรที่คัดสรรจาก UTCC', 'sponsor.cta': 'ติดต่อสอบถาม',
    'logos.title': 'ได้รับความไว้วางใจจาก',
    'logos.lead': 'โครงการริเริ่มและพันธมิตรทางวิชาการ',
    'logos.vip': 'ผู้สนับสนุนระดับ VIP',
    'logos.important': 'ผู้สนับสนุนหลัก',
    'logos.affiliation': 'เครือข่ายความร่วมมือด้านการวิจัย',
    'projects.soon': 'เร็ว ๆ นี้',
    'people.title': 'ทีมงาน', 'people.lede': 'นักวิจัย ที่ปรึกษา วิศวกร และผู้ร่วมงานเบื้องหลัง AGENTHRO',
    'people.all': 'ทั้งหมด',
    'join.wanna': 'อยากร่วมทีมกับเราไหม?',
    'join.click': 'คลิกที่นี่',
    'about.eyebrow': 'เกี่ยวกับเรา',
    'about.p1': 'AGENTHRO คือชื่อสาธารณะของ The Agenthropology Initiative เราศึกษาเอเจนต์ ทั้งที่เป็นปัญญาประดิษฐ์ ตัวละคร และสิ่งที่จินตนาการขึ้น เพื่อทำความเข้าใจผู้คนที่สร้างและอยู่ร่วมกับพวกมัน',
    'about.vision': 'วิสัยทัศน์', 'about.visionText': 'ทำความเข้าใจมนุษย์ ผ่านเอเจนต์ที่เราสร้าง จินตนาการ และอยู่ร่วมด้วย',
    'about.foundation': 'รากฐาน', 'about.themes': 'ประเด็นการวิจัย', 'about.contact': 'ติดต่อ',
    'about.principlesTitle': 'วิธีการทำงานของเรา',
    'about.pr1t': 'มนุษย์มาก่อนเครื่องจักร', 'about.pr1': 'เราให้ความสำคัญกับผู้คน การตัดสินใจ และความสัมพันธ์ ไม่ใช่ “เวทมนตร์ของ AI”',
    'about.pr2t': 'งานวิจัยมาก่อนการตกแต่ง', 'about.pr2': 'สมมติฐาน ระเบียบวิธี และข้อจำกัด ต้องหาได้ง่าย',
    'about.pr3t': 'ออกแบบเพื่อความไม่แน่นอน', 'about.pr3': 'เราบอกอย่างชัดเจนว่าอะไรคือคำถาม สมมติฐาน หรือข้อค้นพบ',
    'about.affiliationLabel': 'หมายเหตุความร่วมมือ',
    'about.affiliation': 'AGENTHRO เป็นโครงการริเริ่ม (initiative) สถาบันเจ้าภาพ ผู้สนับสนุน และพันธมิตรด้านการวิจัย จะแสดงที่นี่เมื่อได้รับการยืนยันอย่างเป็นทางการสำหรับแต่ละโครงการเท่านั้น',
    'footer.contact': 'นโยบายความเป็นส่วนตัวและช่องทางติดต่อจะเผยแพร่เมื่อได้รับการยืนยันแล้ว'
  };
  var MSG = {
    en: {
      nameReq: 'Enter your name.', emailReq: 'Enter your email address.', emailBad: 'Enter an email address like name@example.com.',
      projectReq: 'Choose whether you have a research project in mind.', privacyReq: 'Please confirm you understand how your details are used.',
      bannerErr: 'Please fix the highlighted fields.', bannerErrN: function (n) { return n + (n === 1 ? ' field needs' : ' fields need') + ' attention.'; },
      okTitle: 'Thanks, your interest is noted.', okBody: 'This is a demo form, so nothing was sent. Once a verified contact channel is live, submissions will go to the AGENTHRO team.',
      sending: 'Sending…', themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode', lang: 'Switch language to Thai',
      menuOpen: 'Open menu', menuClose: 'Close menu'
    },
    th: {
      nameReq: 'กรุณากรอกชื่อ', emailReq: 'กรุณากรอกอีเมล', emailBad: 'กรุณากรอกอีเมลให้ถูกรูปแบบ เช่น name@example.com',
      projectReq: 'กรุณาเลือกว่าคุณมีโครงการวิจัยในใจหรือไม่', privacyReq: 'กรุณายืนยันว่าคุณเข้าใจการใช้ข้อมูลของคุณ',
      bannerErr: 'กรุณาแก้ไขช่องที่มีเครื่องหมาย', bannerErrN: function (n) { return 'มี ' + n + ' ช่องที่ต้องแก้ไข'; },
      okTitle: 'ขอบคุณ เราได้รับความสนใจของคุณแล้ว', okBody: 'นี่เป็นแบบฟอร์มตัวอย่าง จึงยังไม่มีการส่งข้อมูล เมื่อมีช่องทางติดต่อที่ยืนยันแล้ว ข้อมูลจะถูกส่งถึงทีม AGENTHRO',
      sending: 'กำลังส่ง…', themeDark: 'เปลี่ยนเป็นโหมดมืด', themeLight: 'เปลี่ยนเป็นโหมดสว่าง', lang: 'Switch language to English',
      menuOpen: 'เปิดเมนู', menuClose: 'ปิดเมนู'
    }
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  nodes.forEach(function (el) { el.setAttribute('data-en', el.textContent); });

  function lang() { return root.getAttribute('lang') === 'th' ? 'th' : 'en'; }
  function t(key) { return MSG[lang()][key]; }

  function applyLang(l) {
    root.setAttribute('lang', l);
    nodes.forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      el.textContent = l === 'th' && TH[k] ? TH[k] : el.getAttribute('data-en');
    });
    document.getElementById('lang-label').textContent = l === 'th' ? 'EN' : 'TH';
    document.getElementById('lang-toggle').setAttribute('aria-label', MSG[l].lang);
    var mobileLangBtn = document.getElementById('mobile-lang-toggle');
    if (mobileLangBtn) {
      mobileLangBtn.textContent = l === 'th' ? 'English (EN)' : 'ภาษาไทย (TH)';
      mobileLangBtn.setAttribute('aria-label', MSG[l].lang);
    }
    syncThemeLabel();
    try { localStorage.setItem('ag-lang', l); } catch (e) {}
  }
  document.getElementById('lang-toggle').addEventListener('click', function () {
    applyLang(lang() === 'th' ? 'en' : 'th');
  });
  var mobileLangToggle = document.getElementById('mobile-lang-toggle');
  if (mobileLangToggle) {
    mobileLangToggle.addEventListener('click', function () {
      applyLang(lang() === 'th' ? 'en' : 'th');
    });
  }

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  function syncThemeLabel() {
    var dark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-pressed', String(dark));
    themeBtn.setAttribute('aria-label', dark ? t('themeLight') : t('themeDark'));
  }
  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('ag-theme', next); } catch (e) {}
    syncThemeLabel();
  });

  applyLang(lang());

  /* ---------- Mobile menu ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var nav = document.getElementById('primary-nav');
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? t('menuClose') : t('menuOpen'));
  }
  menuBtn.addEventListener('click', function () { setMenu(!nav.classList.contains('is-open')); });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
  });

  /* ---------- Info tooltips (click/tap, hover/focus, Escape, outside click) ---------- */
  var tips = Array.prototype.slice.call(document.querySelectorAll('.info-tip'));
  function closeAllTips(except) {
    tips.forEach(function (tip) {
      if (tip === except) return;
      var btn = tip.querySelector('.info-tip-btn');
      var panel = tip.querySelector('.info-tip-panel');
      btn.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
    });
  }
  tips.forEach(function (tip) {
    var btn = tip.querySelector('.info-tip-btn');
    var panel = tip.querySelector('.info-tip-panel');
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = btn.getAttribute('aria-expanded') === 'true';
      closeAllTips(tip);
      btn.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });
  document.addEventListener('click', function () { closeAllTips(null); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeAllTips(null);
  });

  /* ---------- Floating Projects Spiral (24 cards, 36s continuous cycle) ---------- */
  var fpSection = document.getElementById('works');
  var fpCanvas = document.getElementById('floating-projects-canvas');
  var fpLayer = document.getElementById('floating-cards-layer');
  if (fpSection && fpCanvas && fpLayer && Array.isArray(window.AGENTHRO_FLOATING_CARDS)) {
    var updateFpScale = function () {
      var rect = fpSection.getBoundingClientRect();
      var scale = Math.max(rect.width / 1440, rect.height / 1024, rect.width < 900 ? 0.42 : 0);
      fpCanvas.style.transform = 'translateX(-50%) scale(' + scale + ')';
    };
    updateFpScale();
    if ('ResizeObserver' in window) {
      new ResizeObserver(updateFpScale).observe(fpSection);
    } else {
      window.addEventListener('resize', updateFpScale);
    }

    var FP_FONT_MULT = 12;
    var scalePx = function (val) {
      return (parseFloat(val) * FP_FONT_MULT) + 'px';
    };

    var fpEls = window.AGENTHRO_FLOATING_CARDS.map(function (c) {
      var slot = document.createElement('div');
      slot.className = 'fp-card-slot';
      slot.style.left = c.left;
      slot.style.top = c.top;
      slot.style.width = c.boxSize;
      slot.style.height = c.boxSize;

      var rot = document.createElement('div');
      rot.className = 'fp-card-rot';
      rot.style.transform = 'matrix(' + c.matrix.join(',') + ')';

      var card = document.createElement(c.href ? 'a' : 'div');
      card.className = 'fp-card';
      if (c.href) {
        card.href = c.href;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
      }
      card.setAttribute('aria-label', c.titleLines.join(' '));
      card.style.width = c.cardSize;
      card.style.height = c.cardSize;
      card.style.background = c.bg;
      if (c.cover) {
        card.style.backgroundImage = 'linear-gradient(180deg, rgba(16, 19, 25, 0.08), rgba(16, 19, 25, 0.62)), url("' + c.cover.replace(/"/g, '%22') + '")';
        card.style.backgroundSize = 'cover';
        card.style.backgroundPosition = 'center';
        card.style.color = '#f5f2e9';
      } else if (c.bg.toLowerCase() === '#102c50' || c.bg.toLowerCase() === '#173f91') {
        card.style.color = '#f5f2e9';
      }
      card.style.borderRadius = c.radius;

      var inner = document.createElement('div');
      inner.className = 'fp-card-inner';

      var titleBox = document.createElement('div');
      titleBox.className = 'fp-card-title';
      titleBox.style.left = scalePx(c.tLeft);
      titleBox.style.top = scalePx(c.tTop);
      titleBox.style.width = scalePx(c.tW);
      titleBox.style.fontSize = scalePx(c.tFs);
      c.titleLines.forEach(function (line) {
        var lp = document.createElement('p');
        lp.textContent = line;
        titleBox.appendChild(lp);
      });

      var go = document.createElement('p');
      go.className = 'fp-card-go';
      go.style.left = scalePx(c.gLeft);
      go.style.top = scalePx(c.gTop);
      go.style.width = scalePx(c.gW);
      go.style.fontSize = scalePx(c.gFs);
      go.textContent = c.href ? 'Go to page' : 'Coming soon';

      inner.appendChild(titleBox);
      inner.appendChild(go);
      card.appendChild(inner);
      rot.appendChild(card);
      slot.appendChild(rot);
      fpLayer.appendChild(slot);
      return { el: card, data: c };
    });

    var sample = function (times, vals, u) {
      if (u <= times[0]) return vals[0];
      var last = times.length - 1;
      if (u >= times[last]) return vals[last];
      var lo = 0, hi = last;
      while (lo + 1 < hi) {
        var mid = (lo + hi) >> 1;
        if (times[mid] <= u) lo = mid;
        else hi = mid;
      }
      var span = times[hi] - times[lo];
      var f = span > 0 ? (u - times[lo]) / span : 0;
      return vals[lo] + (vals[hi] - vals[lo]) * f;
    };

    var applyFpAt = function (u) {
      for (var i = 0; i < fpEls.length; i++) {
        var item = fpEls[i];
        var d = item.data;
        var s = sample(d.tScale, d.sx, u);
        var tx = sample(d.tScale, d.tx, u);
        var ty = sample(d.tScale, d.ty, u);
        var op = sample(d.tOp, d.op, u);
        var invStr = d.invMatrix ? 'matrix(' + d.invMatrix.join(',') + ') ' : '';
        var fwdStr = d.fwdMatrix ? 'matrix(' + d.fwdMatrix.join(',') + ') ' : '';
        item.el.style.transform =
          'translate(50%, 50%) ' +
          invStr +
          'translate(' + tx + 'px, ' + ty + 'px) ' +
          'scale(' + s + ', ' + s + ') ' +
          fwdStr +
          'translate(-50%, -50%)';
        item.el.style.opacity = String(op);
        item.el.style.pointerEvents = op > 0.05 ? 'auto' : 'none';
      }
    };

    var reduceFp = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceFp) {
      applyFpAt(0);
    } else {
      var fpPaused = false;
      var fpElapsed = 0;
      var fpLastTs = 0;
      var setFpPaused = function (paused) { fpPaused = paused; };
      fpEls.forEach(function (item) {
        item.el.addEventListener('mouseenter', function () { setFpPaused(true); });
        item.el.addEventListener('mouseleave', function () { setFpPaused(false); });
        item.el.addEventListener('focus', function () { setFpPaused(true); });
        item.el.addEventListener('blur', function () { setFpPaused(false); });
      });
      var tickFp = function (ts) {
        if (fpLastTs && !fpPaused) {
          fpElapsed = (fpElapsed + (ts - fpLastTs)) % 36000;
        }
        fpLastTs = ts;
        if (!fpPaused || fpElapsed === 0) {
          applyFpAt(fpElapsed / 36000);
        }
        window.requestAnimationFrame(tickFp);
      };
      applyFpAt(0);
      window.requestAnimationFrame(tickFp);
    }
  }

  /* ---------- People stacked card deck (scroll-driven peel) ---------- */
  var cardStack = document.getElementById('people-card-stack');
  if (cardStack) {
    var deckCards = Array.prototype.slice.call(cardStack.querySelectorAll('.profile-card'));
    var deckRaf = 0;
    var updateDeckCards = function () {
      deckRaf = 0;
      var stackTop = cardStack.getBoundingClientRect().top + window.scrollY;
      var step = window.innerHeight * 0.72;
      if (step <= 0) return;
      var scrollProgress = Math.max(0, window.scrollY - stackTop) / step;
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      deckCards.forEach(function (card, index) {
        var rawProgress = Math.min(1, Math.max(0, scrollProgress - index));
        var progress = reduceMotion ? (rawProgress >= 0.5 ? 1 : 0) : rawProgress;
        var easedProgress = progress * progress * (3 - 2 * progress);
        var exitRotation = index % 2 === 0 ? -7 * easedProgress : 7 * easedProgress;
        var opacity = Math.max(0, 1 - Math.max(0, progress - 0.78) / 0.22);
        card.style.setProperty('--exit-y', (-132 * easedProgress) + 'vh');
        card.style.setProperty('--exit-rotation', exitRotation + 'deg');
        card.style.setProperty('--exit-scale', String(1 - 0.035 * easedProgress));
        card.style.opacity = String(opacity);
        card.style.pointerEvents = progress > 0.9 ? 'none' : 'auto';
        card.setAttribute('aria-hidden', progress > 0.98 ? 'true' : 'false');
      });
    };
    var scheduleDeckUpdate = function () {
      if (deckRaf) return;
      deckRaf = window.requestAnimationFrame(updateDeckCards);
    };
    updateDeckCards();
    window.addEventListener('scroll', scheduleDeckUpdate, { passive: true });
    window.addEventListener('resize', scheduleDeckUpdate);
  }

  /* ---------- Event item poster preview ---------- */
  var eventPoster = document.getElementById('event-poster-preview');
  if (eventPoster) {
    var eventPosterImg = eventPoster.querySelector('img');
    var posterLinks = Array.prototype.slice.call(document.querySelectorAll('[data-poster]'));
    var canHoverPoster = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var placePoster = function (x, y) {
      var w = eventPoster.offsetWidth || 250;
      var h = eventPoster.offsetHeight || 312;
      var left = Math.min(Math.max(12, x + 20), Math.max(12, window.innerWidth - w - 16));
      var top = Math.min(Math.max(12, y - h / 2), Math.max(12, window.innerHeight - h - 16));
      eventPoster.style.left = left + 'px';
      eventPoster.style.top = top + 'px';
    };
    var showPoster = function (link, x, y) {
      var src = link.getAttribute('data-poster');
      if (!src) return;
      if (eventPosterImg.getAttribute('src') !== src) {
        eventPosterImg.setAttribute('src', src);
      }
      placePoster(x, y);
      eventPoster.classList.add('is-visible');
    };
    var hidePoster = function () { eventPoster.classList.remove('is-visible'); };

    if (canHoverPoster) {
      posterLinks.forEach(function (link) {
        link.addEventListener('mouseenter', function (e) { showPoster(link, e.clientX, e.clientY); });
        link.addEventListener('mousemove', function (e) { showPoster(link, e.clientX, e.clientY); });
        link.addEventListener('mouseleave', hidePoster);
        link.addEventListener('focus', function () {
          var rect = link.getBoundingClientRect();
          showPoster(link, rect.right, rect.top + rect.height / 2);
        });
        link.addEventListener('blur', hidePoster);
      });
    }
  }

  /* ---------- Active section in nav ---------- */
  var links = Array.prototype.slice.call(nav.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href.charAt(0) === '#') {
        var s = document.querySelector(href);
        if (s) spy.observe(s);
      }
    });

    /* Subtle reveal */
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      var targets = document.querySelectorAll('.research-intro, .foundation, .four-a-item, .service-card, .poster-frame, .event-col, .sponsor-card, .namecard, .wanna-join-inner, .about-lead, .about-contact-card, .about-pillar');
      var rev = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-visible'); rev.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -8% 0px' });
      targets.forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('is-visible');
        } else {
          el.classList.add('reveal');
          rev.observe(el);
        }
      });
    }
  }
})();
