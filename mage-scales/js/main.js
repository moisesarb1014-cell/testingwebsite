/* ===========================================================
   Mage Scales — Interactions
   =========================================================== */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var navLinks = document.querySelectorAll('.main-nav a');

  /* ---------- Header background on scroll ---------- */
  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileNav.hidden = !open;
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  mobileNav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !mobileNav.hidden) setMenu(false);
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024 && !mobileNav.hidden) setMenu(false);
  });

  /* ---------- Active nav link ---------- */
  var sections = Array.prototype.map.call(navLinks, function (link) {
    return document.querySelector(link.getAttribute('href'));
  });

  if ('IntersectionObserver' in window) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var idx = sections.indexOf(entry.target);
        navLinks.forEach(function (l, i) { l.classList.toggle('is-active', i === idx); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (s) navObserver.observe(s); });

    /* ---------- Reveal on scroll ---------- */
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { revealObserver.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Contact form ----------
     Validates, then opens the visitor's email app with the inquiry addressed to Mage Scales. */
  var EMAIL = 'moisesarb1014@gmail.com';
  var form = document.getElementById('contact-form');
  var status = form.querySelector('.form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var valid = true;
    form.querySelectorAll('[required]').forEach(function (field) {
      var ok = field.value.trim() !== '' && (field.type !== 'email' || /^\S+@\S+\.\S+$/.test(field.value));
      field.classList.toggle('is-invalid', !ok);
      if (!ok) valid = false;
    });

    if (!valid) {
      status.textContent = 'Please fill in your name, a valid email and a message.';
      return;
    }
    var get = function (name) { return form.elements[name].value.trim(); };
    var subject = 'New project inquiry from ' + get('name') + (get('business') ? ' (' + get('business') + ')' : '');
    var body = [
      'Name: ' + get('name'),
      'Email: ' + get('email'),
      'Business: ' + (get('business') || '-'),
      'Phone: ' + (get('phone') || '-'),
      'Interested in: ' + get('service'),
      '',
      get('message')
    ].join('\n');
    window.location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    status.textContent = 'Opening your email app… If nothing happens, email us at ' + EMAIL + ' or call (832) 244-2224.';
  });

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
