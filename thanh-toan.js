
// ============================================
// NOVA TOTE - CHECKOUT JAVASCRIPT
// ============================================

(() => {
  "use strict";

  const CART_KEY = "nova_tote_cart_v1";

  const form = document.getElementById("novaCheckoutForm");
  const productsBox = document.getElementById("checkoutProducts");
  const submitButton = document.getElementById("placeOrderButton");
  const errorBox = document.getElementById("checkoutError");

  if (!form || !productsBox) return;

  const money = value =>
    new Intl.NumberFormat("vi-VN").format(value) + "₫";

  // Ngăn HTML trong tên sản phẩm làm hỏng giao diện
  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  // Đọc giỏ hàng
  function readCart() {
    try {
      const cart = JSON.parse(localStorage.getItem(CART_KEY) || "[]");
      return Array.isArray(cart) ? cart : [];
    } catch {
      return [];
    }
  }

  // Lấy dữ liệu sản phẩm từ script.js
  function getProduct(id) {
    if (typeof PRODUCTS === "undefined") return null;

    if (Array.isArray(PRODUCTS)) {
      return PRODUCTS.find(p => String(p.id) === String(id));
    }

    if (PRODUCTS && typeof PRODUCTS === "object") {
      return PRODUCTS[id] ||
        Object.values(PRODUCTS).find(p => String(p.id) === String(id));
    }

    return null;
  }

  // Chuẩn hóa dữ liệu giỏ hàng
  function getItems() {
    return readCart().map(item => {
      const id = String(item.id ?? item.productId ?? "");
      const product = getProduct(id);

      const quantity = Number(item.qty ?? item.quantity ?? 1);
      const price = Number(product?.price ?? item.price ?? 0);

      return {
        id,
        name: product?.name ?? item.name ?? id,
        image: product?.image ?? item.image ?? "",
        price,
        quantity: Math.max(1, Math.floor(quantity))
      };
    }).filter(item =>
      item.id &&
      Number.isFinite(item.price) &&
      item.price > 0 &&
      Number.isFinite(item.quantity)
    );
  }

  function saveItems(items) {
    // Giữ lại cấu trúc dữ liệu cũ của từng sản phẩm
    const oldCart = readCart();

    const updated = items.map(item => {
      const old = oldCart.find(p =>
        String(p.id ?? p.productId) === item.id
      ) || {};

      return {
        ...old,
        id: item.id,
        qty: item.quantity,
        quantity: item.quantity
      };
    });

    localStorage.setItem(CART_KEY, JSON.stringify(updated));
  }

  function showError(message) {
    errorBox.textContent = message;
    errorBox.hidden = !message;
  }

  function renderCheckout() {
    const items = getItems();
    const count = items.reduce((sum, p) => sum + p.quantity, 0);
    const subtotal = items.reduce(
      (sum, p) => sum + p.price * p.quantity, 0
    );

    document.getElementById("checkoutItemCount").textContent =
      count + " sản phẩm";

    document.getElementById("checkoutSubtotal").textContent =
      money(subtotal);

    document.getElementById("checkoutGrandTotal").textContent =
      money(subtotal);

    if (items.length === 0) {
      productsBox.innerHTML = `
        <p style="padding:25px 0;line-height:1.8">
          Giỏ hàng đang trống hoặc thông tin sản phẩm
          chưa hợp lệ.
        </p>
        <a href="san-pham.html" class="checkout-back-shop">
          Khám phá sản phẩm →
        </a>
      `;

      submitButton.disabled = true;
      return;
    }

    submitButton.disabled = false;

    productsBox.innerHTML = items.map(item => `
      <div class="checkout-product">
        <img src="${escapeHTML(item.image)}"
             alt="${escapeHTML(item.name)}">

        <div>
          <h3>${escapeHTML(item.name)}</h3>

          <p class="checkout-product-price">
            ${money(item.price)}
          </p>

          <div class="checkout-quantity">
            <button type="button"
                    data-action="minus"
                    data-id="${escapeHTML(item.id)}"
                    aria-label="Giảm số lượng">−</button>

            <span>${item.quantity}</span>

            <button type="button"
                    data-action="plus"
                    data-id="${escapeHTML(item.id)}"
                    aria-label="Tăng số lượng">+</button>
          </div>

          <button type="button"
                  class="checkout-remove"
                  data-action="remove"
                  data-id="${escapeHTML(item.id)}">
            Xóa sản phẩm
          </button>
        </div>
      </div>
    `).join("");
  }

  // Tăng, giảm và xóa sản phẩm
  productsBox.addEventListener("click", event => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const id = button.dataset.id;
    const action = button.dataset.action;
    let items = getItems();

    if (action === "remove") {
      items = items.filter(item => item.id !== id);
    } else {
      items = items.map(item => {
        if (item.id !== id) return item;

        return {
          ...item,
          quantity: action === "plus"
            ? Math.min(item.quantity + 1, 99)
            : Math.max(item.quantity - 1, 1)
        };
      });
    }

    saveItems(items);
    renderCheckout();

    // Cập nhật giỏ hàng chung nếu hàm có sẵn
    if (typeof renderCart === "function") {
      renderCart();
    }
  });

  // Tạo mã tham chiếu đơn hàng
  function makeOrderCode() {
    const date = new Date();
    const datePart =
      date.getFullYear().toString() +
      String(date.getMonth() + 1).padStart(2, "0") +
      String(date.getDate()).padStart(2, "0");

    const randomPart = Math.random()
      .toString(36)
      .slice(2, 8)
      .toUpperCase();

    return "NOVA-" + datePart + "-" + randomPart;
  }

  // Chuẩn bị thông tin để gửi qua FormSubmit
  form.addEventListener("submit", event => {
    const items = getItems();

    if (!items.length) {
      event.preventDefault();
      showError("Giỏ hàng trống. Vui lòng chọn sản phẩm trước khi đặt hàng.");
      return;
    }

    if (!form.checkValidity()) {
      event.preventDefault();
      form.reportValidity();
      return;
    }

    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );

    const details = items.map((item, index) => {
      return [
        `${index + 1}. ${item.name}`,
        `Ma SP: ${item.id}`,
        `So luong: ${item.quantity}`,
        `Don gia: ${money(item.price)}`,
        `Thanh tien: ${money(item.price * item.quantity)}`
      ].join(" | ");
    }).join("\n");

    document.getElementById("orderCode").value = makeOrderCode();
    document.getElementById("orderDetails").value = details;
    document.getElementById("orderSubtotal").value = money(subtotal);
    document.getElementById("orderShipping").value =
      "Chua xac dinh - shop se thong bao";
    document.getElementById("orderTotal").value =
      money(subtotal) + " (chua gom phi van chuyen)";

    showError("");

    // Để trình duyệt gửi form đến FormSubmit.
    // Không xóa giỏ hàng tại đây vì chưa biết email đã gửi thành công.
  });

  renderCheckout();
})();
