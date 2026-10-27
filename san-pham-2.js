
// =======================================
// NOVA TOTE - PRODUCT DETAIL 02
// =======================================

(() => {
  "use strict";

  const PRODUCT_ID = "nova-02";
  const CART_KEY = "nova_tote_cart_v1";

  const nameElement = document.getElementById("detailProductName");
  const priceElement = document.getElementById("detailProductPrice");
  const mainImage = document.getElementById("mainProductImage");
  const quantityInput = document.getElementById("productQuantity");
  const addButton = document.getElementById("detailAddToCart");
  const buyButton = document.getElementById("detailBuyNow");
  const message = document.getElementById("productActionMessage");

  // Tìm sản phẩm trong danh sách PRODUCTS của script.js
  function findProduct() {
    if (typeof PRODUCTS === "undefined") return null;

    if (Array.isArray(PRODUCTS)) {
      return PRODUCTS.find(p => String(p.id) === PRODUCT_ID);
    }

    if (PRODUCTS && typeof PRODUCTS === "object") {
      return PRODUCTS[PRODUCT_ID] ||
        Object.values(PRODUCTS).find(
          p => String(p.id) === PRODUCT_ID
        );
    }

    return null;
  }

  const product = findProduct();

  function formatMoney(price) {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫";
  }

  function getQuantity() {
    const value = Number(quantityInput.value);
    return Math.max(
      1,
      Math.min(99, Number.isFinite(value) ? Math.floor(value) : 1)
    );
  }

  function readCart() {
    try {
      const data = JSON.parse(
        localStorage.getItem(CART_KEY) || "[]"
      );
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  }

  // Thêm sản phẩm vào giỏ hàng chung
  function addSelectedProductToCart() {
    if (!product) {
      message.textContent =
        "Không tìm thấy sản phẩm nova-02 trong script.js.";
      return false;
    }

    const price = Number(product.price);

    if (!Number.isFinite(price) || price <= 0) {
      message.textContent =
        "Giá sản phẩm chưa hợp lệ. Vui lòng kiểm tra script.js.";
      return false;
    }

    const quantity = getQuantity();
    const cart = readCart();

    const existing = cart.find(item =>
      String(item.id ?? item.productId) === PRODUCT_ID
    );

    if (existing) {
      const current = Number(
        existing.qty ?? existing.quantity ?? 0
      );

      existing.qty = Math.min(current + quantity, 99);
      existing.quantity = existing.qty;
    } else {
      cart.push({
        id: PRODUCT_ID,
        name: product.name,
        image: product.image,
        price,
        qty: quantity,
        quantity
      });
    }

    localStorage.setItem(
      CART_KEY,
      JSON.stringify(cart)
    );

    message.textContent =
      `Đã thêm ${quantity} sản phẩm vào giỏ hàng.`;

    // Đồng bộ với giỏ hàng chung
    if (typeof renderCart === "function") {
      renderCart();
    }

    const cartCount = document.getElementById("cartCount");

    if (cartCount) {
      const totalQuantity = cart.reduce(
        (sum, item) =>
          sum + Number(item.qty ?? item.quantity ?? 0),
        0
      );

      cartCount.textContent = totalQuantity;
    }

    return true;
  }

  // Hiển thị tên, giá và ảnh sản phẩm
  if (product) {
    nameElement.textContent = product.name;
    priceElement.textContent = formatMoney(product.price);

    if (product.image) {
      mainImage.src = product.image;

      const firstThumbnail =
        document.querySelector(".product-thumbnail");

      if (firstThumbnail) {
        firstThumbnail.dataset.image = product.image;

        const thumbnailImage =
          firstThumbnail.querySelector("img");

        if (thumbnailImage) {
          thumbnailImage.src = product.image;
        }
      }
    }
  } else {
    priceElement.textContent = "Chưa có thông tin giá";
    addButton.disabled = true;
    buyButton.disabled = true;

    message.textContent =
      "Hãy khai báo sản phẩm nova-02 trong script.js.";
  }

  // Giảm số lượng
  document.getElementById("quantityMinus")
    .addEventListener("click", () => {
      quantityInput.value = Math.max(
        1,
        getQuantity() - 1
      );
    });

  // Tăng số lượng
  document.getElementById("quantityPlus")
    .addEventListener("click", () => {
      quantityInput.value = Math.min(
        99,
        getQuantity() + 1
      );
    });

  quantityInput.addEventListener("change", () => {
    quantityInput.value = getQuantity();
  });

  // Chuyển ảnh sản phẩm
  document.querySelectorAll(".product-thumbnail")
    .forEach(button => {
      button.addEventListener("click", () => {
        mainImage.src = button.dataset.image;

        document.querySelectorAll(".product-thumbnail")
          .forEach(item => item.classList.remove("active"));

        button.classList.add("active");
      });
    });

  // THÊM VÀO GIỎ HÀNG
  addButton.addEventListener("click", () => {
    if (!addSelectedProductToCart()) return;

    const cartOpen = document.getElementById("cartOpen");
    if (cartOpen) cartOpen.click();
  });

  // MUA NGAY -> THANH TOÁN
  buyButton.addEventListener("click", () => {
    if (!addSelectedProductToCart()) return;

    window.location.href = "thanh-toan.html";
  });

})();
