
// =====================================
// NOVA TOTE - NEWS JAVASCRIPT
// =====================================

const NEWS_POSTS = {
  "1": {
    title: "NOVA TOTE – Khi chiếc túi tote trở thành phụ kiện quen thuộc của giới trẻ",
    date: "27/10/2026",
    author: "NOVA TOTE",
    image: "images/news-1.jpg",
    content: `
      <p>
        Trong những năm gần đây, túi tote ngày càng
        trở nên quen thuộc trong đời sống của giới trẻ.
        Không chỉ là vật dụng mang theo đồ cá nhân,
        túi tote còn được sử dụng như một phụ kiện
        thể hiện phong cách thời trang.
      </p>

      <h3>Phụ kiện phù hợp với nhiều hoạt động</h3>
      <p>
        Từ môi trường học tập, công việc đến
        những buổi dạo phố, túi tote có thể
        kết hợp cùng nhiều phong cách khác nhau.
      </p>

      <h3>NOVA TOTE và tinh thần năng động</h3>
      <p>
        NOVA TOTE hướng đến những mẫu túi có
        thiết kế gần gũi, phù hợp với nhu cầu
        sử dụng trong cuộc sống hằng ngày.
      </p>

      <p>
        Với thông điệp "Mở rộng không gian,
        mở rộng trải nghiệm", NOVA TOTE mong muốn
        đồng hành cùng khách hàng trên
        những hành trình của riêng mình.
      </p>
    `
  },

  "2": {
    title: "Xu hướng sử dụng túi tote trong thời trang và cuộc sống hiện đại",
    date: "26/10/2026",
    author: "NOVA TOTE",
    image: "images/news-2.jpg",
    content: `
      <p>
        Túi tote là một trong những phụ kiện
        được nhiều người lựa chọn nhờ thiết kế
        đơn giản và khả năng phối hợp với
        nhiều trang phục.
      </p>

      <h3>Thiết kế tối giản</h3>
      <p>
        Những chiếc túi tote có kiểu dáng
        đơn giản dễ dàng kết hợp với trang phục
        đi học, đi làm hoặc dạo phố.
      </p>

      <h3>Phong cách cá nhân</h3>
      <p>
        Mỗi người có thể lựa chọn màu sắc,
        kiểu dáng và kích thước túi phù hợp
        với nhu cầu và sở thích của mình.
      </p>

      <h3>Ứng dụng trong cuộc sống</h3>
      <p>
        Một chiếc túi phù hợp có thể giúp
        mang theo những vật dụng cần thiết,
        góp phần tạo sự thuận tiện trong
        các hoạt động hằng ngày.
      </p>
    `
  },

  "3": {
    title: "NOVA TOTE và hành trình xây dựng phong cách thương hiệu riêng",
    date: "25/10/2026",
    author: "NOVA TOTE",
    image: "images/news-3.jpg",
    content: `
      <p>
        NOVA TOTE được xây dựng với mong muốn
        mang đến những chiếc túi tote phù hợp
        với phong cách sống năng động và
        nhu cầu sử dụng của người trẻ.
      </p>

      <h3>Thông điệp thương hiệu</h3>
      <p>
        "Mở rộng không gian, mở rộng trải nghiệm"
        là thông điệp mà NOVA TOTE muốn
        gửi đến khách hàng.
      </p>

      <h3>Hướng đến sự tiện dụng</h3>
      <p>
        Thương hiệu hướng đến các mẫu túi
        có tính ứng dụng trong học tập,
        công việc và cuộc sống thường ngày.
      </p>

      <h3>Gắn kết cùng khách hàng</h3>
      <p>
        NOVA TOTE mong muốn trở thành
        một phần trong những trải nghiệm
        giản dị nhưng đáng nhớ của khách hàng.
      </p>
    `
  },

  "4": {
    title: "Khám phá bộ sưu tập túi tote dành cho học tập, công việc và dạo phố",
    date: "24/10/2026",
    author: "NOVA TOTE",
    image: "images/news-4.jpg",
    content: `
      <p>
        Bộ sưu tập NOVA TOTE gồm ba mẫu túi,
        hướng đến những nhu cầu sử dụng
        khác nhau trong cuộc sống hằng ngày.
      </p>

      <h3>Túi tote cho học tập</h3>
      <p>
        Khi lựa chọn túi đi học, người dùng
        nên quan tâm đến kích thước, khả năng
        chứa đồ và độ thoải mái khi mang.
      </p>

      <h3>Túi tote cho công việc</h3>
      <p>
        Những thiết kế tối giản có thể
        kết hợp cùng trang phục công sở
        và nhiều phong cách thường ngày.
      </p>

      <h3>Túi tote cho dạo phố</h3>
      <p>
        Một chiếc túi có kích thước phù hợp
        sẽ giúp bạn mang theo các vật dụng
        cá nhân khi ra ngoài.
      </p>

      <p>
        Khám phá các mẫu túi hiện có
        tại trang Sản phẩm NOVA TOTE.
      </p>
      <p>
        <a href="san-pham.html">Xem bộ sưu tập NOVA TOTE →</a>
      </p>
    `
  }
};

function showNewsArticle() {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("post");

  const detail = document.getElementById("news-detail");
  const content = document.getElementById("newsArticleContent");

  if (!detail || !content) return;

  const post = NEWS_POSTS[postId];

  if (!post) {
    detail.hidden = true;
    return;
  }

  content.innerHTML = `
    <span class="eyebrow">NOVA NEWS</span>

    <h2>${post.title}</h2>

    <div class="news-article-meta">
      ✍ ${post.author} · ${post.date}
    </div>

    <img src="${post.image}" alt="${post.title}">

    <div class="news-article-body">
      ${post.content}
    </div>
  `;

  detail.hidden = false;

  if (window.location.hash === "#news-detail") {
    requestAnimationFrame(() => {
      detail.scrollIntoView({ behavior: "auto" });
    });
  }
}

showNewsArticle();
