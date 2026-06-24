/* Intelligent IoT Lab — small no-dependency interactions.
   1) Active-nav highlight per current page
   2) Email copy button (Join page)
   3) Mobile nav toggle  */
(function () {
  'use strict';

  /* ---- 1) Active nav highlight ---- */
  // Normalize a path to a bare page key: "/research.html" -> "research", "/" -> "index".
  function pageKey(path) {
    var file = path.split('/').pop() || '';
    if (file === '' || file === 'index.html') return 'index';
    return file.replace(/\.html$/, '');
  }

  var current = pageKey(location.pathname);

  document.querySelectorAll('.nav__link[data-page]').forEach(function (el) {
    if (el.getAttribute('data-page') === current) el.classList.add('is-active');
  });

  /* ---- 2) Email copy ---- */
  document.querySelectorAll('[data-copy-email]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var email = btn.getAttribute('data-copy-email');
      var original = btn.textContent;
      var done = function () {
        btn.textContent = 'COPIED ✓';
        setTimeout(function () { btn.textContent = original; }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else {
        // Fallback for non-secure contexts
        var ta = document.createElement('textarea');
        ta.value = email;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });

  /* ---- 3) Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
    });
  }
})();
