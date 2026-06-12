/* Lorewells — behavior: nav, drawer, reveals, lightbox, two-door forms */
(function () {
  document.documentElement.classList.add('js');

  /* Re-run layout once webfonts arrive — some embedded views compute layout
     with fallback metrics and never reflow on font swap, which corrupts
     wrapped-line heights and shrink-to-fit widths. */
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      document.body.style.letterSpacing = '0.000001px';
      void document.body.offsetHeight;
      document.body.style.letterSpacing = '';
      void document.body.offsetHeight;
    });
  }

  /* ---------- nav solidify ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile drawer ---------- */
  var drawer = document.getElementById('drawer');
  var burger = document.getElementById('burger');
  burger.addEventListener('click', function () { drawer.classList.add('open'); });
  document.getElementById('drawerClose').addEventListener('click', function () {
    drawer.classList.remove('open');
  });
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { drawer.classList.remove('open'); });
  });

  /* ---------- surfacing reveals ---------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!reduce) {
    var pending = revealEls.slice();
    var ticking = false;
    var surfaceCheck = function () {
      ticking = false;
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var threshold = vh * 0.92;
      pending = pending.filter(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < threshold && r.bottom > 0) {
          el.classList.add('surfaced');
          return false;
        }
        return true;
      });
      if (!pending.length) {
        window.removeEventListener('scroll', requestCheck);
        window.removeEventListener('resize', requestCheck);
      }
    };
    var requestCheck = function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(surfaceCheck);
      }
    };
    /* Mark in-view content surfaced before enabling hidden pre-states, so
       nothing visible ever flashes out. Hidden states only switch on once
       two animation frames prove the clock is running — some embedded views
       freeze transitions entirely, and there content must stay static. */
    surfaceCheck();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.documentElement.classList.add('anim');
        window.addEventListener('scroll', requestCheck, { passive: true });
        window.addEventListener('resize', requestCheck);
        window.addEventListener('load', surfaceCheck);
        surfaceCheck();
      });
    });
  }

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lbSubject = document.getElementById('lbSubject');
  var lbMeta = document.getElementById('lbMeta');
  var lbRuntime = document.getElementById('lbRuntime');
  var transcript = document.getElementById('transcript');
  var transcriptToggle = document.getElementById('transcriptToggle');
  var lastFocus = null;

  document.querySelectorAll('[data-lightbox]').forEach(function (el) {
    el.addEventListener('click', function () {
      lastFocus = el;
      lbSubject.textContent = el.getAttribute('data-subject') || '';
      lbMeta.textContent = el.getAttribute('data-meta') || '';
      lbRuntime.textContent = 'RUNTIME ' + (el.getAttribute('data-runtime') || '') + ' · CAPTIONED · TRANSCRIBED';
      transcript.classList.remove('open');
      transcriptToggle.textContent = 'View transcript';
      lightbox.classList.add('open');
      document.getElementById('lightboxClose').focus();
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    if (lastFocus) lastFocus.focus();
  }
  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  transcriptToggle.addEventListener('click', function () {
    var open = transcript.classList.toggle('open');
    transcriptToggle.textContent = open ? 'Hide transcript' : 'View transcript';
  });

  /* ---------- two-door modal ---------- */
  var modal = document.getElementById('modal');
  var doors = modal.querySelectorAll('[data-door-panel]');
  var lastDoorTrigger = null;

  function openDoor(name, trigger) {
    lastDoorTrigger = trigger || null;
    doors.forEach(function (d) {
      var active = d.getAttribute('data-door-panel') === name;
      d.style.display = active ? 'block' : 'none';
      if (active) {
        var form = d.querySelector('form');
        var success = d.querySelector('.form-success');
        form.classList.remove('hidden');
        form.reset();
        form.querySelectorAll('.field').forEach(function (f) { f.classList.remove('invalid'); });
        success.classList.remove('show');
      }
    });
    modal.classList.add('open');
    var first = modal.querySelector('[data-door-panel][style*="block"] input');
    if (first) first.focus();
  }
  function closeModal() {
    modal.classList.remove('open');
    if (lastDoorTrigger) lastDoorTrigger.focus();
  }

  document.querySelectorAll('[data-door]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openDoor(btn.getAttribute('data-door'), btn);
    });
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  /* validation + success states */
  modal.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('.field').forEach(function (field) {
        var input = field.querySelector('input, select, textarea');
        if (!input) return;
        var bad = input.required && (
          !input.value.trim() ||
          (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim()))
        );
        field.classList.toggle('invalid', !!bad);
        if (bad) valid = false;
      });
      if (!valid) return;
      form.classList.add('hidden');
      form.parentElement.querySelector('.form-success').classList.add('show');
    });
  });

  /* ---------- escape closes overlays ---------- */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (lightbox.classList.contains('open')) closeLightbox();
    if (modal.classList.contains('open')) closeModal();
    drawer.classList.remove('open');
  });
})();
