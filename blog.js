
// =====================================
// NOVA TOTE - BLOG JAVASCRIPT
// =====================================

// LỌC DANH MỤC BÀI VIẾT
const filterButtons = document.querySelectorAll(".filter-btn");
const blogCards = document.querySelectorAll(".nova-blog-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filterButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    blogCards.forEach(card => {
      card.hidden = category !== "all" &&
                    card.dataset.category !== category;
    });
  });
});

// NỘI DUNG 4 BÀI VIẾT MẪU
const BLOG_POSTS = {
  "1": {
    title: "Túi tote và phong cách sống năng động của giới trẻ",
    date: "27/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-1.jpg",
    content: `
      <p>
        Trong cuộc sống hiện đại, túi tote đã trở thành
        một phụ kiện quen thuộc với nhiều bạn trẻ.
        Thiết kế đơn giản và tính linh hoạt giúp chiếc
        túi phù hợp với nhiều hoạt động khác nhau.
      </p>

      <h3>Vì sao túi tote được yêu thích?</h3>
      <p>
        Túi tote dễ dàng kết hợp với nhiều trang phục,
        từ phong cách năng động đến tối giản.
        Đây cũng là lựa chọn phù hợp để mang theo
        sách vở, đồ dùng cá nhân hoặc vật dụng
        cần thiết trong những chuyến đi ngắn.
      </p>

      <h3>Túi tote trong cuộc sống hằng ngày</h3>
      <p>
        Dù đến trường, đi làm hay gặp gỡ bạn bè,
        một chiếc túi tote có thể giúp bạn sắp xếp
        những vật dụng thường dùng và thể hiện
        phong cách cá nhân.
      </p>

      <p>
        Với NOVA TOTE, mỗi chiếc túi không chỉ là
        một phụ kiện mà còn là người bạn đồng hành
        trong những trải nghiệm thường ngày.
      </p>
    `
  },

  "2": {
    title: "5 cách phối đồ cùng túi tote đơn giản mà thời trang",
    date: "26/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-2.jpg",
    content: `
      <p>
        Túi tote là phụ kiện có thể kết hợp với nhiều
        phong cách khác nhau. Dưới đây là 5 gợi ý
        phối đồ đơn giản dành cho bạn.
      </p>

      <h3>1. Áo thun và quần jeans</h3>
      <p>
        Một công thức quen thuộc, trẻ trung,
        thích hợp cho những buổi đi học hoặc dạo phố.
      </p>

      <h3>2. Áo sơ mi và quần dài</h3>
      <p>
        Kết hợp túi tote với áo sơ mi giúp trang phục
        trở nên thanh lịch mà vẫn giữ sự thoải mái.
      </p>

      <h3>3. Váy dài và túi tote</h3>
      <p>
        Phong cách nhẹ nhàng, phù hợp cho những
        buổi cà phê hoặc gặp gỡ bạn bè.
      </p>

      <h3>4. Trang phục tối giản</h3>
      <p>
        Những gam màu trung tính kết hợp cùng
        túi tote tạo cảm giác hài hòa và tinh tế.
      </p>

      <h3>5. Phong cách năng động</h3>
      <p>
        Áo hoodie, quần rộng và giày thể thao
        là lựa chọn thú vị khi kết hợp cùng túi tote.
      </p>
    `
  },

  "3": {
    title: "Bí quyết bảo quản túi tote luôn sạch đẹp",
    date: "25/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-3.jpg",
    content: `
      <p>
        Việc vệ sinh và bảo quản đúng cách sẽ giúp
        chiếc túi tote giữ được vẻ ngoài đẹp mắt
        trong quá trình sử dụng.
      </p>

      <h3>1. Kiểm tra chất liệu trước khi vệ sinh</h3>
      <p>
        Mỗi loại vải có yêu cầu chăm sóc khác nhau.
        Hãy kiểm tra nhãn hướng dẫn của sản phẩm
        trước khi giặt hoặc sử dụng chất tẩy rửa.
      </p>

      <h3>2. Làm sạch vết bẩn sớm</h3>
      <p>
        Với những vết bẩn nhỏ, bạn có thể thử
        lau nhẹ bằng khăn mềm và dung dịch phù hợp
        với chất liệu túi.
      </p>

      <h3>3. Phơi ở nơi thoáng mát</h3>
      <p>
        Nếu túi được phép giặt, hãy làm khô theo
        hướng dẫn của nhà sản xuất và hạn chế
        ánh nắng gay gắt khi không cần thiết.
      </p>

      <h3>4. Cất giữ đúng cách</h3>
      <p>
        Khi không sử dụng, nên để túi ở nơi
        khô ráo, tránh ẩm mốc và hạn chế
        đặt vật nặng làm biến dạng túi.
      </p>
    `
  },

  "4": {
    title: "NOVA TOTE – Người bạn đồng hành trong những hành trình hằng ngày",
    date: "24/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-4.jpg",
    content: `
      <p>
        Mỗi ngày đều mang đến những trải nghiệm
        khác nhau. Đó có thể là một buổi học,
        một ngày làm việc hoặc một chuyến đi
        khám phá những địa điểm mới.
      </p>

      <h3>Mở rộng không gian</h3>
      <p>
        NOVA TOTE hướng đến những chiếc túi
        giúp người dùng mang theo vật dụng
        cần thiết trong cuộc sống thường ngày.
      </p>

      <h3>Mở rộng trải nghiệm</h3>
      <p>
        Chúng tôi tin rằng một chiếc túi phù hợp
        sẽ góp phần tạo nên sự thuận tiện,
        thoải mái và tự tin trong mỗi hành trình.
      </p>

      <h3>Cùng NOVA viết tiếp câu chuyện</h3>
      <p>
        NOVA TOTE mong muốn đồng hành cùng
        khách hàng trong những khoảnh khắc
        giản dị nhưng đáng nhớ.
      </p>
    `
  }
};

// HIỂN THỊ NỘI DUNG BÀI VIẾT
function showBlogArticle() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("post");

  const detail = document.getElementById("article-detail");
  const content = document.getElementById("articleContent");

  if (!detail || !content) return;

  const post = BLOG_POSTS[postId];

  if (!post) {
    detail.hidden = true;
    return;
  }

  content.innerHTML = `
    <span class="eyebrow">NOVA JOURNAL</span>
    <h2>${post.title}</h2>

    <div class="nova-article-meta">
      ✍ ${post.author} · ${post.date}
    </div>

    <img src="${post.image}" alt="${post.title}">

    <div class="nova-article-body">
      ${post.content}
    </div>
  `;

  detail.hidden = false;

  if (window.location.hash === "#article-detail") {
    requestAnimationFrame(() => {
      detail.scrollIntoView({ behavior: "auto" });
    });
  }
}

showBlogArticle();
