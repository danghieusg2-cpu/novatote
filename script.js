
// ================================
// NOVA TOTE - PRODUCTS & CART
// ================================

// DỮ LIỆU MẪU: Thay tên, giá và ảnh
// bằng thông tin sản phẩm thật của NOVA TOTE.
const PRODUCTS = [
  {
    id: "nova-01",
    name: "NOVA TOTE – Đen cá tính",
    price: 279000,
    image: "images/product-1.jpg",
    tag: "NỔI BẬT"
  },
  {
    id: "nova-02",
    name: "NOVA TOTE – Kem thanh lịch",
    price: 279000,
    image: "images/product-2.jpg",
    tag: "YÊU THÍCH"
  },
  {
    id: "nova-03",
    name: "NOVA TOTE – Hồng dịu dàng",
    price: 279000,
    image: "images/product-3.jpg",
    tag: "MỚI"
  },
 
{
  id: "nova-04",
  name: "NOVA TOTE – Xanh baby",
  price: 279000,
  image: "images/product-4.jpg"
}

];

const CART_KEY = "nova_tote_cart_v1";

const $ = (selector) => document.querySelector(selector);

function formatPrice(number) {
  return new Intl.NumberFormat("vi-VN").format(number) + "₫";
}

function getCart() {
  try {
    const data = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCart();
}

function renderProducts() {
  const grid = $("#productGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="product-price">${formatPrice(product.price)}</p>
        <button class="add-cart" data-add="${product.id}">
          + THÊM VÀO GIỎ HÀNG
        </button>
      </div>
    </article>
  `).join("");
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const cart = getCart();
  const item = cart.find(p => p.id === id);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart(cart);
  openCart();
}

function changeQuantity(id, amount) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);
  if (!item) return;

  item.quantity += amount;
  saveCart(cart.filter(p => p.quantity > 0));
}

function removeFromCart(id) {
  saveCart(getCart().filter(p => p.id !== id));
}

function renderCart() {
  const cart = getCart();
  const itemsBox = $("#cartItems");
  const count = $("#cartCount");
  const totalBox = $("#cartTotal");

  const quantity = cart.reduce((sum, p) => sum + p.quantity, 0);
  if (count) count.textContent = quantity;

  if (!itemsBox || !totalBox) return;

  let total = 0;

  if (cart.length === 0) {
    itemsBox.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
    totalBox.textContent = formatPrice(0);
    return;
  }

  itemsBox.innerHTML = cart.map(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (!product) return "";

    total += product.price * item.quantity;

    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)}</p>
          <div class="cart-qty">
            <button data-qty="${product.id}" data-amount="-1"
                    aria-label="Giảm số lượng">−</button>
            <span>${item.quantity}</span>
            <button data-qty="${product.id}" data-amount="1"
                    aria-label="Tăng số lượng">+</button>
            <button class="remove-item" data-remove="${product.id}">
              Xóa
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  totalBox.textContent = formatPrice(total);
}

function openCart() {
  $("#cartDrawer")?.classList.add("open");
  $("#cartOverlay")?.classList.add("show");
  $("#cartDrawer")?.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
  $("#cartClose")?.focus();
}

function closeCart() {
  $("#cartDrawer")?.classList.remove("open");
  $("#cartOverlay")?.classList.remove("show");
  $("#cartDrawer")?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
  $("#cartOpen")?.focus();
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const qty = event.target.closest("[data-qty]");
  const remove = event.target.closest("[data-remove]");

  if (add) addToCart(add.dataset.add);
  if (qty) changeQuantity(qty.dataset.qty, Number(qty.dataset.amount));
  if (remove) removeFromCart(remove.dataset.remove);
});

$("#cartOpen")?.addEventListener("click", openCart);
$("#cartClose")?.addEventListener("click", closeCart);
$("#cartOverlay")?.addEventListener("click", closeCart);
$("#continueShopping")?.addEventListener("click", closeCart);

$("#menuToggle")?.addEventListener("click", () => {
  const isOpen = $("#mainNav").classList.toggle("show");
  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeCart();
});

$("#checkoutButton")?.addEventListener("click", () => {
  if (getCart().length === 0) {
    alert("Vui lòng thêm sản phẩm vào giỏ hàng.");
    return;
  }

  alert("Giỏ hàng đã sẵn sàng. Chức năng đặt hàng sẽ được hoàn thiện ở trang thanh toán.");
});

renderProducts();
renderCart();



// ===================================
// NOVA TOTE - TRANG SAN PHAM
// ===================================

function renderShopProducts() {
  const grid = document.getElementById("shopProductGrid");
  if (!grid) return;

  grid.innerHTML = PRODUCTS.map(product => `
    <article class="shop-product-card">

      <div class="shop-product-image">
        <span class="shop-product-tag">
          ${product.tag || "NOVA TOTE"}
        </span>

        <a href="san-pham-${PRODUCTS.findIndex(p => p.id === product.id) + 1}.html">
          <img src="${product.image}"
               alt="${product.name}"
               loading="lazy">
        </a>
      </div>

      <div class="shop-product-info">

        <h3>${product.name}</h3>

        <p class="shop-product-price">
          ${formatPrice(product.price)}
        </p>

        <div class="shop-product-actions">

          <a class="shop-detail-btn"
             href="san-pham-${PRODUCTS.findIndex(p => p.id === product.id) + 1}.html">
            XEM CHI TIẾT
          </a>

          <button class="shop-add-btn"
                  data-add="${product.id}">
            + THÊM VÀO GIỎ HÀNG
          </button>

        </div>

      </div>

    </article>
  `).join("");
}

renderShopProducts();


/* ====================================
   CHUYỂN ĐẾN TRANG THANH TOÁN
==================================== */

const checkoutButton = document.getElementById("checkoutButton");

if (checkoutButton) {
  checkoutButton.addEventListener("click", function () {
    window.location.href = "thanh-toan.html";
  });
}
