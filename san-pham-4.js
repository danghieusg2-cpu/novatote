
/* ======================================
   NOVA TOTE - CHI TIẾT SẢN PHẨM 04
====================================== */

(() => {
  "use strict";

  const PRODUCT_ID = "nova-04";
  const CART_KEY = "nova_tote_cart_v1";

  const nameEl = document.getElementById("detailProductName");
  const priceEl = document.getElementById("detailProductPrice");
  const mainImage = document.getElementById("mainProductImage");
  const quantityInput = document.getElementById("productQuantity");
  const addBtn = document.getElementById("detailAddToCart");
  const buyBtn = document.getElementById("detailBuyNow");
  const message = document.getElementById("productActionMessage");

  function findProduct() {
    if (typeof PRODUCTS === "undefined") return null;

    if (Array.isArray(PRODUCTS)) {
      return PRODUCTS.find(p => String(p.id) === PRODUCT_ID);
    }

    return PRODUCTS[PRODUCT_ID] ||
      Object.values(PRODUCTS).find(
        p => String(p.id) === PRODUCT_ID
      );
  }

  const product = findProduct();

  function formatMoney(value) {
    return new Intl.NumberFormat("vi-VN").format(value) + "₫";
  }

  function getQuantity() {
    const value = Number(quantityInput.value);

    return Number.isFinite(value)
      ? Math.max(1, Math.min(99, Math.floor(value)))
      : 1;
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

  function updateCartCount(cart) {
    const countEl = document.getElementById("cartCount");

    if (!countEl) return;

    const total = cart.reduce((sum, item) => {
      return sum + Number(
        item.qty ?? item.quantity ?? 0
      );
    }, 0);

    countEl.textContent = total;
  }

  function addProductToCart() {
    if (!product) {
      message.textContent =
        "Không tìm thấy sản phẩm nova-04 trong script.js.";
      return false;
    }

    const price = Number(product.price);

    if (!Number.isFinite(price) || price <= 0) {
      message.textContent =
        "Giá sản phẩm chưa hợp lệ.";
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

      const updated = Math.min(current + quantity, 99);
      existing.qty = updated;
      existing.quantity = updated;
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

    updateCartCount(cart);

    // Nếu script.js có hàm renderCart dùng chung
    if (typeof renderCart === "function") {
      renderCart();
    }

    message.textContent =
      `Đã thêm ${quantity} sản phẩm vào giỏ hàng.`;

    return true;
  }

  // HIỂN THỊ TÊN, GIÁ, ẢNH
  if (product) {
    nameEl.textContent = product.name;
    priceEl.textContent = formatMoney(product.price);

    if (product.image) {
      mainImage.src = product.image;
      mainImage.alt = product.name;

      const firstThumb =
        document.querySelector(".product-thumbnail");

      if (firstThumb) {
        firstThumb.dataset.image = product.image;

        const img = firstThumb.querySelector("img");
        if (img) img.src = product.image;
      }
    }
  } else {
    priceEl.textContent = "Chưa có thông tin giá";
    addBtn.disabled = true;
    buyBtn.disabled = true;

    message.textContent =
      "Vui lòng khai báo nova-04 trong script.js.";
  }

  // CHỌN SỐ LƯỢNG
  document.getElementById("quantityMinus")
    .addEventListener("click", () => {
      quantityInput.value = Math.max(
        1,
        getQuantity() - 1
      );
    });

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

  // THAY ĐỔI ẢNH
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
  addBtn.addEventListener("click", () => {
    if (!addProductToCart()) return;

    const cartOpen = document.getElementById("cartOpen");

    if (cartOpen) cartOpen.click();
  });

  // MUA NGAY -> THANH TOÁN
  buyBtn.addEventListener("click", () => {
    if (!addProductToCart()) return;

    window.location.href = "thanh-toan.html";
  });

})();
