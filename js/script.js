/* Dịt Molly — script.js */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Đường dẫn tới thư mục assets, dùng cho các trang trong /html/ ---------- */
  var ASSET_BASE = '../assets/';

  /* ---------- Render lưới sản phẩm nổi bật (index.html) từ sanPhamList trong products-data.js ---------- */
  var homeGrid = document.querySelector('#home-product-grid');
  if (homeGrid && typeof sanPhamList !== 'undefined') {
    var featured = sanPhamList.slice(0, 5);
    homeGrid.innerHTML = featured.map(function (p) {
      return (
        '<article class="fish-tag">' +
          '<div class="fish-tag-string"></div>' +
          '<div class="fish-tag-photo">' +
            '<div class="fish-tag-photo-inner">' +
              '<img src="assets/' + p.image + '" alt="' + p.name + ' trong khay lưới" data-lightbox="assets/' + p.image + '">' +
            '</div>' +
            '<span class="fish-tag-code">' + p.code + '</span>' +
          '</div>' +
          '<div class="fish-tag-body">' +
            '<h3>' + p.name + '</h3>' +
            '<span class="price">' + p.priceText + '</span>' +
            '<p>' + p.stockNote + '</p>' +
            '<div class="fish-tag-cta"><a href="html/chi-tiet.html?id=' + p.id + '" class="btn btn-sm btn-dark">Xem chi tiết</a></div>' +
          '</div>' +
        '</article>'
      );
    }).join('');
  }

  /* ---------- Render lưới sản phẩm (san-pham.html) từ sanPhamList trong products-data.js ---------- */
  var productGrid = document.querySelector('#product-grid');
  if (productGrid && typeof sanPhamList !== 'undefined') {
    productGrid.innerHTML = sanPhamList.map(function (p) {
      return (
        '<article class="fish-tag" data-category="' + p.category + '">' +
          '<div class="fish-tag-string"></div>' +
          '<div class="fish-tag-photo">' +
            '<div class="fish-tag-photo-inner">' +
              '<img src="' + ASSET_BASE + p.image + '" alt="' + p.name + ' trong khay lưới" data-lightbox="' + ASSET_BASE + p.image + '">' +
            '</div>' +
            '<span class="fish-tag-code">' + p.code + '</span>' +
          '</div>' +
          '<div class="fish-tag-body">' +
            '<h3>' + p.name + '</h3>' +
            '<span class="price">' + p.priceText + '</span>' +
            '<p>' + p.stockNote + '</p>' +
            '<div class="fish-tag-cta"><a href="chi-tiet.html?id=' + p.id + '" class="btn btn-sm btn-dark">Xem chi tiết</a></div>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    var allCountBtn = document.querySelector('.filter-btn[data-filter="all"]');
    if (allCountBtn) allCountBtn.textContent = 'Tất cả (' + sanPhamList.length + ')';
  }

  /* ---------- Render trang chi tiết (chi-tiet.html) từ sanPhamList ---------- */
  var detailInfo = document.querySelector('.detail-info');
  if (detailInfo && typeof sanPhamList !== 'undefined') {
    var params = new URLSearchParams(window.location.search);
    var wantedId = params.get('id');
    var product = sanPhamList.find(function (p) { return p.id === wantedId; }) || sanPhamList[0];

    document.title = product.name + ' — Dịt Molly';

    var breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) breadcrumb.innerHTML = '<a href="../index.html">Trang chủ</a> / <a href="san-pham.html">Sản phẩm</a> / ' + product.name;

    var pageEyebrow = document.querySelector('.page-hero .eyebrow');
    if (pageEyebrow) pageEyebrow.textContent = 'Mã trại ' + product.code;

    document.querySelectorAll('.page-hero h1, .detail-info h1').forEach(function (h1) {
      h1.textContent = product.name;
    });

    var mainImg = document.querySelector('.detail-gallery-main img');
    if (mainImg) {
      mainImg.src = ASSET_BASE + product.image;
      mainImg.alt = product.name + ' tại trại';
    }

    var thumbsWrap = document.querySelector('.detail-thumbs');
    if (thumbsWrap) {
      thumbsWrap.innerHTML = product.thumbs.map(function (img, i) {
        return '<button class="' + (i === 0 ? 'active' : '') + '"><img src="' + ASSET_BASE + img + '" alt="Ảnh ' + (i + 1) + ' ' + product.name + '"></button>';
      }).join('');
    }

    var detailEyebrow = document.querySelector('.detail-info .eyebrow');
    if (detailEyebrow) detailEyebrow.textContent = product.heroNote;

    var detailPrice = document.querySelector('.detail-price');
    if (detailPrice) detailPrice.textContent = product.priceText;

    var specTable = document.querySelector('.spec-table');
    if (specTable) {
      var rows = '<tr><td>Mã giống</td><td>' + product.code + '</td></tr>';
      Object.keys(product.specs).forEach(function (key) {
        rows += '<tr><td>' + key + '</td><td>' + product.specs[key] + '</td></tr>';
      });
      specTable.innerHTML = rows;
    }

    var orderBtn = document.querySelector('.detail-info .btn-primary');
    if (orderBtn) orderBtn.textContent = 'Đặt dòng ' + product.name;

    var careNote = document.querySelector('.care-note');
    if (careNote) careNote.innerHTML = '<strong>Ghi chú chăm sóc:</strong> ' + product.careNote;

    var relatedGrid = document.querySelector('.section-tint .tag-grid');
    if (relatedGrid) {
      var others = sanPhamList.filter(function (p) { return p.id !== product.id; }).slice(0, 3);
      relatedGrid.innerHTML = others.map(function (p) {
        return (
          '<article class="fish-tag">' +
            '<div class="fish-tag-string"></div>' +
            '<div class="fish-tag-photo">' +
              '<div class="fish-tag-photo-inner"><img src="' + ASSET_BASE + p.image + '" alt="' + p.name + '"></div>' +
              '<span class="fish-tag-code">' + p.code + '</span>' +
            '</div>' +
            '<div class="fish-tag-body">' +
              '<h3>' + p.name + '</h3>' +
              '<span class="price">' + p.priceText + '</span>' +
              '<div class="fish-tag-cta"><a href="chi-tiet.html?id=' + p.id + '" class="btn btn-sm btn-dark">Xem</a></div>' +
            '</div>' +
          '</article>'
        );
      }).join('');
    }
  }

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
