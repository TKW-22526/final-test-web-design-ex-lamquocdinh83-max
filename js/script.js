/* Dịt Molly — script.js */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { navLinks.classList.remove('open'); });
    });
  }

  /* ---------- Lightbox for any [data-lightbox] image ---------- */
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('[data-lightbox]').forEach(function (el) {
      el.addEventListener('click', function () {
        var src = el.getAttribute('data-lightbox') || el.src;
        lightboxImg.src = src;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  /* ---------- Product filter (san-pham.html) ---------- */
  var filterBar = document.querySelector('.filter-bar');
  if (filterBar) {
    var buttons = filterBar.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('[data-category]');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        cards.forEach(function (card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.classList.remove('tag-hidden');
          } else {
            card.classList.add('tag-hidden');
          }
        });
      });
    });
  }

  /* ---------- Quantity stepper (chi-tiet.html) ---------- */
  document.querySelectorAll('.qty-control').forEach(function (control) {
    var input = control.querySelector('input');
    var min = parseInt(input.getAttribute('min') || '1', 10);
    var max = parseInt(input.getAttribute('max') || '999', 10);
    control.querySelector('.qty-minus').addEventListener('click', function () {
      input.value = Math.max(min, (parseInt(input.value, 10) || min) - 1);
    });
    control.querySelector('.qty-plus').addEventListener('click', function () {
      input.value = Math.min(max, (parseInt(input.value, 10) || min) + 1);
    });
  });

  /* ---------- Contact form validation (lien-he.html) ---------- */
  var contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      var fields = contactForm.querySelectorAll('[data-required]');
      fields.forEach(function (field) {
        var wrapper = field.closest('.field');
        var value = field.value.trim();
        var ok = value.length > 0;
        if (field.type === 'tel' && ok) {
          ok = /^[0-9+\s]{8,14}$/.test(value);
        }
        if (!ok) {
          valid = false;
          wrapper.classList.add('invalid');
        } else {
          wrapper.classList.remove('invalid');
        }
      });

      var status = contactForm.querySelector('.form-status');
      if (valid) {
        status.textContent = 'Đã gửi! Dịt Molly sẽ liên hệ lại trong vòng 24 giờ. Cảm ơn bạn đã ghé trại 🦆';
        status.classList.add('show', 'ok');
        contactForm.reset();
      } else {
        status.textContent = 'Vui lòng kiểm tra lại các mục được đánh dấu bên dưới.';
        status.classList.remove('ok');
        status.classList.add('show');
      }
    });
  }

  /* ---------- Detail page gallery thumbs ---------- */
  document.querySelectorAll('.detail-thumbs').forEach(function (thumbs) {
    var main = document.querySelector('.detail-gallery-main img');
    thumbs.querySelectorAll('button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        thumbs.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        if (main) main.src = btn.querySelector('img').src;
      });
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
