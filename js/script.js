/* =========================================================
   MOLLY AQUA — script.js
   ========================================================= */

/* ---------- Dữ liệu sản phẩm (demo, lưu trong bộ nhớ) ---------- */
const PRODUCTS = [
  {
    id: "molly-den",
    name: "Molly Đen Nhung",
    group: "co-dien",
    color: "#1c2422",
    belly: "#3a4a46",
    price: 20000,
    size: "4 - 6 cm",
    temp: "24 - 28°C",
    ph: "7.0 - 8.5",
    do_kho: "Dễ nuôi",
    desc: "Molly Đen Nhung có màu đen tuyền bóng như nhung, tính cách hiền hòa, thích hợp cho người mới bắt đầu chơi cá cảnh."
  },
  {
    id: "molly-vang",
    name: "Molly Vàng Chanh",
    group: "co-dien",
    color: "#E8B23C",
    belly: "#f6d97a",
    price: 25000,
    size: "4 - 6 cm",
    temp: "24 - 28°C",
    ph: "7.0 - 8.5",
    do_kho: "Dễ nuôi",
    desc: "Sắc vàng chanh tươi sáng, nổi bật trong bể thủy sinh xanh, ăn tạp và sinh sản nhanh."
  },
  {
    id: "molly-dalmatian",
    name: "Molly Dalmatian",
    group: "doc-la",
    color: "#e9e4d6",
    belly: "#222",
    spots: true,
    price: 30000,
    size: "5 - 7 cm",
    temp: "25 - 28°C",
    ph: "7.2 - 8.5",
    do_kho: "Dễ nuôi",
    desc: "Hoa văn đốm đen trắng độc đáo như chó Dalmatian, mỗi con một hoa văn không con nào giống con nào."
  },
  {
    id: "molly-balloon",
    name: "Molly Balloon Cam",
    group: "doc-la",
    color: "#E8783C",
    belly: "#f5a97a",
    balloon: true,
    price: 45000,
    size: "3 - 5 cm",
    temp: "25 - 29°C",
    ph: "7.2 - 8.5",
    do_kho: "Trung bình",
    desc: "Thân bụng tròn đặc trưng do đột biến cột sống, dáng bơi đáng yêu, cần bể rộng và bạn cùng đàn hiền lành."
  },
  {
    id: "molly-lyretail",
    name: "Molly Lyretail Cam",
    group: "vay-dai",
    color: "#E8783C",
    belly: "#f3c08a",
    lyretail: true,
    price: 35000,
    size: "5 - 8 cm",
    temp: "24 - 28°C",
    ph: "7.0 - 8.4",
    do_kho: "Dễ nuôi",
    desc: "Đuôi chẻ hình đàn lia mềm mại, bơi uyển chuyển, là điểm nhấn cho bể thủy sinh có hậu cảnh tối."
  },
  {
    id: "molly-sailfin",
    name: "Molly Sailfin Buồm Đen",
    group: "vay-dai",
    color: "#141b19",
    belly: "#2c3a37",
    sailfin: true,
    price: 60000,
    size: "7 - 10 cm",
    temp: "25 - 29°C",
    ph: "7.2 - 8.6",
    do_kho: "Trung bình",
    desc: "Vây lưng xòe rộng như cánh buồm, dáng vẻ oai vệ, thích hợp làm cá tiêu điểm trong bể cộng đồng lớn."
  },
  {
    id: "molly-bach-tang",
    name: "Molly Bạch Tạng Mắt Đỏ",
    group: "doc-la",
    color: "#f4efe4",
    belly: "#fff",
    eye: "#c0392b",
    price: 40000,
    size: "5 - 7 cm",
    temp: "24 - 28°C",
    ph: "7.0 - 8.5",
    do_kho: "Trung bình",
    desc: "Toàn thân trắng sữa, mắt đỏ nổi bật, nhạy cảm với ánh sáng mạnh nên nên bố trí cây thủy sinh che bớt sáng."
  }
];

/* ---------- Vẽ SVG cá theo biến thể (không dùng ảnh thật) ---------- */
function fishSVG(p, big) {
  const w = big ? 220 : 140;
  const dorsal = p.sailfin
    ? `<path d="M60 20 C75 4 100 2 118 10 C102 20 84 26 66 30 Z" fill="${p.color}" stroke="#0b1615" stroke-width="2"/>`
    : `<path d="M62 24 C72 14 86 12 96 16 C86 22 76 26 66 30 Z" fill="${p.color}" stroke="#0b1615" stroke-width="1.6"/>`;
  const tail = p.lyretail
    ? `<path d="M150 40 L172 18 L162 40 L172 62 Z" fill="${p.color}" stroke="#0b1615" stroke-width="1.6"/>`
    : `<path d="M150 40 L174 26 L174 54 Z" fill="${p.color}" stroke="#0b1615" stroke-width="1.6"/>`;
  const body = p.balloon
    ? `M18 40 C18 20 40 10 66 10 C98 10 130 20 150 40 C130 60 98 70 66 70 C40 70 18 60 18 40 Z`
    : `M14 40 C14 24 38 14 66 14 C96 14 128 24 150 40 C128 56 96 66 66 66 C38 66 14 56 14 40 Z`;
  const spots = p.spots
    ? `<circle cx="46" cy="30" r="5" fill="${p.belly}"/><circle cx="70" cy="48" r="4" fill="${p.belly}"/><circle cx="95" cy="28" r="3.5" fill="${p.belly}"/><circle cx="110" cy="46" r="5" fill="${p.belly}"/>`
    : "";
  const eyeColor = p.eye || "#0b1615";
  return `
  <svg viewBox="0 0 190 80" width="${w}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${p.name}">
    ${dorsal}
    ${tail}
    <path d="${body}" fill="${p.color}" stroke="#0b1615" stroke-width="2"/>
    <path d="M18 46 C34 54 50 54 64 48" stroke="#0b1615" stroke-width="1.4" fill="none" stroke-linecap="round" opacity=".5"/>
    ${spots}
    <circle cx="118" cy="34" r="4.5" fill="${eyeColor}"/>
  </svg>`;
}

const money = n => n.toLocaleString("vi-VN") + " đ";

/* ---------- Giỏ hàng demo (localStorage) ---------- */
const CART_KEY = "molly_aqua_cart";
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY)) || []; }catch(e){ return []; } }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartBadge(); }
function addToCart(id, qty=1){
  const cart = getCart();
  const line = cart.find(l => l.id === id);
  if(line) line.qty += qty; else cart.push({id, qty});
  saveCart(cart);
  showToast("Đã thêm vào giỏ hàng");
}
function updateCartBadge(){
  const el = document.querySelector("[data-cart-count]");
  if(!el) return;
  const total = getCart().reduce((s,l)=>s+l.qty,0);
  el.textContent = total;
  el.style.display = total > 0 ? "inline-flex" : "none";
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg){
  let el = document.querySelector(".toast");
  if(!el){
    el = document.createElement("div");
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> el.classList.remove("show"), 2200);
}

/* ---------- Nav mobile toggle ---------- */
function initNav(){
  const btn = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if(!btn || !links) return;
  btn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

/* ---------- Trang chủ: sản phẩm nổi bật ---------- */
function renderFeatured(basePath){
  const grid = document.querySelector("[data-featured]");
  if(!grid) return;
  const featured = PRODUCTS.slice(0, 4);
  grid.innerHTML = featured.map(p => productCard(p, basePath)).join("");
}

function productCard(p, basePath){
  return `
  <article class="fish-card">
    <div class="swatch">${fishSVG(p)}</div>
    <div class="body">
      <span class="tag">${groupLabel(p.group)}</span>
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="badges">
        <span class="badge">${p.size}</span>
        <span class="badge">${p.do_kho}</span>
      </div>
      <div class="price-row">
        <span class="price">${money(p.price)}</span>
        <a class="btn btn-primary" href="${basePath}chi-tiet.html?id=${p.id}">Xem chi tiết</a>
      </div>
    </div>
  </article>`;
}

function groupLabel(g){
  return { "co-dien":"Cổ điển", "doc-la":"Độc lạ", "vay-dai":"Vây dài" }[g] || "";
}

/* ---------- Trang sản phẩm: lưới + lọc ---------- */
function initSanPham(basePath){
  const grid = document.querySelector("[data-product-grid]");
  if(!grid) return;
  const filterBar = document.querySelector("[data-filter-bar]");

  function draw(group){
    const list = group === "all" ? PRODUCTS : PRODUCTS.filter(p => p.group === group);
    grid.innerHTML = list.map(p => productCard(p, basePath)).join("");
  }
  draw("all");

  if(filterBar){
    filterBar.addEventListener("click", e => {
      const btn = e.target.closest(".filter-btn");
      if(!btn) return;
      filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      draw(btn.dataset.group);
    });
  }
}

/* ---------- Trang chi tiết ---------- */
function initChiTiet(basePath){
  const wrap = document.querySelector("[data-detail]");
  if(!wrap) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || PRODUCTS[0].id;
  const p = PRODUCTS.find(x => x.id === id) || PRODUCTS[0];

  document.title = p.name + " · Molly Aqua";
  wrap.innerHTML = `
    <div class="detail-visual">${fishSVG(p, true)}</div>
    <div class="detail-info">
      <span class="eyebrow">${groupLabel(p.group)}</span>
      <h1>${p.name}</h1>
      <p class="price">${money(p.price)} / con</p>
      <p>${p.desc}</p>
      <table class="spec-table">
        <tr><td>Kích thước</td><td>${p.size}</td></tr>
        <tr><td>Nhiệt độ nước</td><td>${p.temp}</td></tr>
        <tr><td>Độ pH</td><td>${p.ph}</td></tr>
        <tr><td>Độ khó nuôi</td><td>${p.do_kho}</td></tr>
      </table>
      <div class="qty-row">
        <div class="qty-control">
          <button type="button" data-qty-minus aria-label="Giảm số lượng">–</button>
          <input type="text" value="1" data-qty-input readonly>
          <button type="button" data-qty-plus aria-label="Tăng số lượng">+</button>
        </div>
        <button class="btn btn-primary" data-add-cart>Thêm vào giỏ</button>
      </div>
      <a class="btn btn-outline" href="san-pham.html">← Quay lại danh sách sản phẩm</a>
    </div>
  `;

  const qtyInput = wrap.querySelector("[data-qty-input]");
  wrap.querySelector("[data-qty-minus]").addEventListener("click", () => {
    qtyInput.value = Math.max(1, parseInt(qtyInput.value) - 1);
  });
  wrap.querySelector("[data-qty-plus]").addEventListener("click", () => {
    qtyInput.value = parseInt(qtyInput.value) + 1;
  });
  wrap.querySelector("[data-add-cart]").addEventListener("click", () => {
    addToCart(p.id, parseInt(qtyInput.value));
  });

  // related products
  const relatedGrid = document.querySelector("[data-related]");
  if(relatedGrid){
    const related = PRODUCTS.filter(x => x.group === p.group && x.id !== p.id).slice(0,3);
    relatedGrid.innerHTML = related.map(r => productCard(r, "")).join("");
  }
}

/* ---------- Form liên hệ ---------- */
function initContactForm(){
  const form = document.querySelector("[data-contact-form]");
  if(!form) return;
  const note = form.querySelector("[data-form-note]");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("#name").value.trim();
    const phone = form.querySelector("#phone").value.trim();
    const message = form.querySelector("#message").value.trim();
    if(!name || !phone || !message){
      note.textContent = "Vui lòng điền đầy đủ Họ tên, Số điện thoại và Lời nhắn.";
      note.style.color = "#c0392b";
      return;
    }
    if(!/^[0-9+\s]{9,12}$/.test(phone)){
      note.textContent = "Số điện thoại chưa hợp lệ, vui lòng kiểm tra lại.";
      note.style.color = "#c0392b";
      return;
    }
    note.textContent = "Cảm ơn " + name + "! Molly Aqua sẽ liên hệ lại trong 24 giờ.";
    note.style.color = "#3E7C6F";
    form.reset();
  });
}

/* ---------- Khởi chạy ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const basePath = document.body.dataset.base || "";
  initNav();
  updateCartBadge();
  renderFeatured(basePath);
  initSanPham(basePath);
  initChiTiet(basePath);
  initContactForm();
});
