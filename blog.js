
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
    date: "24/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-1.jpg",
    content: `
      <p>Trong cuộc sống hiện đại, túi tote đã trở thành một phụ kiện thời trang quen thuộc với nhiều bạn trẻ. Nhờ thiết kế đơn giản, tiện dụng và dễ phối đồ, túi tote không chỉ đáp ứng nhu cầu sử dụng hằng ngày mà còn góp phần thể hiện phong cách sống năng động, trẻ trung và cá tính.</p>

<h2>Vì sao túi tote được giới trẻ yêu thích?</h2>

<p>Túi tote được ưa chuộng nhờ thiết kế linh hoạt, phù hợp với nhiều phong cách thời trang khác nhau, từ năng động, cá tính đến tối giản. Với không gian chứa đồ tiện lợi, túi có thể đựng sách vở, đồ dùng cá nhân và những vật dụng cần thiết khi ra ngoài.</p>

<p>Bên cạnh đó, kiểu dáng gọn nhẹ và khả năng kết hợp với nhiều trang phục giúp túi tote trở thành lựa chọn phổ biến của học sinh, sinh viên và nhân viên văn phòng.</p>

<h2>Túi tote trong cuộc sống hằng ngày</h2>

<p>Dù đến trường, đi làm, dạo phố hay gặp gỡ bạn bè, một chiếc túi tote đều có thể trở thành người bạn đồng hành tiện lợi. Thiết kế đơn giản giúp người dùng dễ dàng sắp xếp đồ dùng mà vẫn giữ được vẻ ngoài thời trang.</p>

<p>Không chỉ mang tính ứng dụng, túi tote còn góp phần tạo điểm nhấn cho trang phục và thể hiện gu thẩm mỹ riêng của mỗi người.</p>

<h2>Cách phối đồ với túi tote để tạo phong cách năng động</h2>

<p>Một trong những ưu điểm nổi bật của túi tote là khả năng kết hợp với nhiều loại trang phục. Bạn có thể phối túi tote cùng áo thun, quần jeans và giày sneaker để tạo nên phong cách trẻ trung, thoải mái.</p>

<p>Đối với những người yêu thích sự thanh lịch, túi tote cũng phù hợp khi kết hợp với áo sơ mi, quần dài hoặc váy đơn giản. Việc lựa chọn màu sắc túi hài hòa với trang phục sẽ giúp tổng thể trở nên cân đối và thu hút hơn.</p>

<h2>Bí quyết lựa chọn túi tote phù hợp với nhu cầu</h2>

<p>Khi lựa chọn túi tote, người dùng nên chú ý đến kích thước, chất liệu và kiểu dáng. Nếu thường xuyên mang theo sách vở hoặc laptop, một chiếc túi có không gian rộng rãi sẽ là lựa chọn phù hợp.</p>

<p>Ngoài ra, màu sắc và thiết kế cũng là yếu tố quan trọng. Những mẫu túi có gam màu trung tính thường dễ phối đồ, trong khi các màu sắc nổi bật giúp thể hiện cá tính và tạo điểm nhấn cho phong cách thời trang.</p>

<h2>NOVA TOTE – Đồng hành cùng phong cách sống trẻ trung</h2>

<p>Với định hướng mang đến những chiếc túi tiện dụng và thời trang, <strong>NOVA TOTE</strong> hướng đến việc đáp ứng nhu cầu sử dụng đa dạng của giới trẻ trong cuộc sống hiện đại.</p>

<p>Mỗi chiếc túi không chỉ là một phụ kiện mà còn là người bạn đồng hành trong những trải nghiệm thường ngày, giúp người dùng tự tin thể hiện phong cách cá nhân.</p>

<p><strong>Khám phá các mẫu túi tote của NOVA TOTE</strong> để lựa chọn người bạn đồng hành phù hợp với phong cách của bạn.</p>
    `
  },

  "2": {
    title: "5 cách phối đồ cùng túi tote đơn giản mà thời trang",
    date: "19/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-2.jpg",
    content: `
      
<p>Túi tote ngày càng trở thành phụ kiện thời trang được nhiều bạn trẻ yêu thích nhờ thiết kế đơn giản, tiện dụng và dễ dàng kết hợp với nhiều phong cách khác nhau. Dù đi học, đi làm hay dạo phố, một chiếc túi tote phù hợp đều có thể giúp bộ trang phục trở nên nổi bật và cá tính hơn. Hãy cùng <strong>NOVA TOTE</strong> khám phá 5 cách phối đồ cùng túi tote đơn giản nhưng vẫn thời trang và cuốn hút.</p>

<h2>1. Phối túi tote với áo thun và quần jeans năng động</h2>

<p>Áo thun kết hợp cùng quần jeans là công thức phối đồ quen thuộc nhưng chưa bao giờ lỗi mốt. Khi kết hợp thêm một chiếc túi tote, tổng thể trang phục sẽ trở nên trẻ trung, thoải mái và phù hợp với nhiều hoạt động thường ngày.</p>

<p>Bạn có thể lựa chọn túi tote màu trắng, đen hoặc be để dễ dàng kết hợp với trang phục. Một đôi giày sneaker sẽ giúp hoàn thiện phong cách năng động, đặc biệt phù hợp khi đi học, dạo phố hoặc gặp gỡ bạn bè.</p>

<h2>2. Kết hợp túi tote cùng áo sơ mi thanh lịch</h2>

<p>Nếu yêu thích phong cách nhẹ nhàng và chỉn chu, bạn có thể phối áo sơ mi cùng quần dài hoặc chân váy, sau đó kết hợp với một chiếc túi tote có thiết kế tối giản.</p>

<p>Những mẫu túi tote màu trung tính sẽ giúp trang phục trở nên hài hòa, phù hợp với môi trường học tập và làm việc. Đây là lựa chọn lý tưởng cho những ai muốn duy trì vẻ ngoài thanh lịch mà vẫn đảm bảo sự tiện lợi khi mang theo đồ dùng cá nhân.</p>

<h2>3. Phối túi tote với váy để tạo phong cách nữ tính</h2>

<p>Túi tote không chỉ phù hợp với trang phục năng động mà còn có thể kết hợp cùng những chiếc váy nhẹ nhàng. Một chiếc váy suông, váy hoa hoặc chân váy dài đi cùng túi tote sẽ mang đến vẻ ngoài trẻ trung và tự nhiên.</p>

<p>Để tạo sự cân đối, bạn nên lựa chọn túi có kích thước vừa phải và màu sắc phù hợp với trang phục. Cách phối đồ này đặc biệt thích hợp cho những buổi đi cà phê, mua sắm hoặc dạo phố cuối tuần.</p>

<h2>4. Kết hợp túi tote với phong cách streetwear cá tính</h2>

<p>Đối với những bạn trẻ yêu thích phong cách đường phố, túi tote là phụ kiện giúp tạo điểm nhấn thú vị cho trang phục. Bạn có thể kết hợp áo oversize, quần cargo hoặc quần ống rộng cùng một chiếc túi tote có màu sắc nổi bật.</p>

<p>Những mẫu túi có thiết kế đơn giản nhưng cá tính sẽ giúp tổng thể trang phục trở nên hài hòa. Ngoài ra, việc kết hợp thêm mũ lưỡi trai và giày sneaker cũng góp phần thể hiện phong cách thời trang riêng.</p>

<h2>5. Phối túi tote theo phong cách tối giản Minimalism</h2>

<p>Phong cách tối giản đang được nhiều bạn trẻ lựa chọn bởi sự tinh tế và dễ ứng dụng. Với những trang phục có gam màu cơ bản như trắng, đen, xám hoặc be, một chiếc túi tote đơn sắc sẽ là phụ kiện phù hợp để hoàn thiện tổng thể.</p>

<p>Bạn có thể kết hợp áo thun trơn, quần ống suông và túi tote cùng tông màu để tạo nên vẻ ngoài hiện đại. Cách phối đồ này không quá cầu kỳ nhưng vẫn mang lại cảm giác thanh lịch và thời trang.</p>

<h2>Bí quyết lựa chọn túi tote phù hợp với trang phục</h2>

<p>Để phối đồ cùng túi tote đẹp mắt, bạn nên chú ý đến sự hài hòa giữa màu sắc, kích thước và kiểu dáng của túi. Những mẫu túi tote có màu trung tính thường dễ kết hợp với nhiều trang phục, trong khi túi có màu sắc nổi bật sẽ phù hợp khi bạn muốn tạo điểm nhấn.</p>

<p>Bên cạnh yếu tố thời trang, hãy lựa chọn túi có kích thước và chất liệu phù hợp với nhu cầu sử dụng. Một chiếc túi vừa đẹp vừa tiện dụng sẽ giúp bạn tự tin hơn trong các hoạt động hằng ngày.</p>

<h2>NOVA TOTE – Phụ kiện đồng hành cùng phong cách của bạn</h2>

<p>Không chỉ là vật dụng mang theo đồ dùng cá nhân, túi tote còn là phụ kiện giúp thể hiện cá tính và gu thẩm mỹ của người sử dụng. Với khả năng kết hợp linh hoạt cùng nhiều trang phục, túi tote ngày càng trở thành lựa chọn quen thuộc trong phong cách sống hiện đại.</p>

<p><strong>NOVA TOTE</strong> mang đến những mẫu túi hướng đến sự trẻ trung, tiện lợi và dễ phối đồ, giúp bạn thoải mái thể hiện phong cách riêng trong từng hoạt động thường ngày.</p>

<p>Hãy khám phá các mẫu túi tại <strong>NOVA TOTE</strong> và lựa chọn chiếc túi phù hợp để đồng hành cùng bạn mỗi ngày.</p>

    `
  },

  "3": {
    title: "Bí quyết bảo quản túi tote luôn sạch đẹp",
    date: "14/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-3.jpg",
    content: `

<p>Túi tote là phụ kiện thời trang được nhiều bạn trẻ yêu thích nhờ thiết kế đơn giản, tiện dụng và dễ phối đồ. Tuy nhiên, việc sử dụng thường xuyên có thể khiến túi bị bám bụi, xuất hiện vết bẩn hoặc mất đi hình dáng ban đầu. Để chiếc túi luôn sạch đẹp và sử dụng được lâu dài, hãy cùng <strong>NOVA TOTE</strong> khám phá những bí quyết bảo quản túi tote đơn giản và hiệu quả dưới đây.</p>

<h2>1. Vệ sinh túi tote thường xuyên và đúng cách</h2>

<p>Vệ sinh định kỳ là một trong những cách đơn giản nhất để giữ túi tote luôn sạch đẹp. Sau khi sử dụng, bạn nên kiểm tra và loại bỏ bụi bẩn bám trên bề mặt túi bằng khăn mềm hoặc bàn chải lông mềm.</p>

<p>Đối với những vết bẩn nhẹ, có thể sử dụng khăn ẩm kết hợp với dung dịch làm sạch dịu nhẹ phù hợp với chất liệu túi. Tránh chà xát quá mạnh vì có thể làm ảnh hưởng đến bề mặt vải, màu sắc và hình dáng của sản phẩm.</p>

<h2>2. Giặt túi tote đúng cách để tránh phai màu</h2>

<p>Không phải loại túi tote nào cũng có thể giặt bằng máy. Đối với túi tote vải canvas hoặc cotton, bạn nên kiểm tra hướng dẫn chăm sóc của sản phẩm trước khi giặt để tránh làm co rút hoặc biến dạng túi.</p>

<p>Nếu túi cho phép giặt tay, hãy sử dụng nước mát và chất giặt tẩy dịu nhẹ. Hạn chế sử dụng thuốc tẩy mạnh, đặc biệt đối với những mẫu túi có màu sắc hoặc họa tiết in. Sau khi giặt, nên làm phẳng túi nhẹ nhàng và phơi ở nơi thoáng mát.</p>

<h2>3. Tránh phơi túi tote trực tiếp dưới ánh nắng gay gắt</h2>

<p>Ánh nắng mạnh trong thời gian dài có thể khiến một số chất liệu vải bị phai màu và giảm độ bền. Vì vậy, sau khi vệ sinh, bạn nên phơi túi tote tại nơi có không khí lưu thông tốt, tránh ánh nắng trực tiếp quá lâu.</p>

<p>Đặc biệt, cần đảm bảo túi khô hoàn toàn trước khi sử dụng hoặc cất giữ để hạn chế tình trạng ẩm mốc và xuất hiện mùi khó chịu.</p>

<h2>4. Không đựng đồ quá nặng so với khả năng chịu lực của túi</h2>

<p>Mặc dù túi tote thường có không gian chứa đồ rộng rãi, việc mang quá nhiều vật dụng nặng có thể khiến quai túi bị giãn, đường may chịu áp lực lớn và làm mất dáng túi.</p>

<p>Bạn nên phân bổ đồ dùng hợp lý, ưu tiên những vật dụng cần thiết và lựa chọn túi có kích thước phù hợp với nhu cầu. Thói quen này không chỉ giúp bảo vệ túi mà còn mang lại cảm giác thoải mái khi sử dụng.</p>

<h2>5. Bảo quản túi tote ở nơi khô ráo, thoáng mát</h2>

<p>Khi không sử dụng, túi tote nên được cất giữ ở nơi sạch sẽ, khô ráo và tránh môi trường có độ ẩm cao. Bạn có thể gấp gọn túi theo đường may hoặc đặt túi ngay ngắn trong tủ để tiết kiệm không gian.</p>

<p>Đối với những mẫu túi cần giữ phom dáng, có thể đặt giấy sạch bên trong trước khi cất giữ. Hạn chế để các vật nặng đè lên túi trong thời gian dài vì dễ tạo nếp gấp hoặc làm biến dạng sản phẩm.</p>

<h2>6. Xử lý vết bẩn trên túi tote càng sớm càng tốt</h2>

<p>Trong quá trình sử dụng, túi tote có thể vô tình bị dính cà phê, thức ăn hoặc các vết bẩn khác. Khi gặp tình huống này, bạn nên xử lý sớm để hạn chế vết bẩn thấm sâu vào sợi vải.</p>

<p>Hãy dùng khăn sạch thấm nhẹ phần chất lỏng còn lại, sau đó lựa chọn phương pháp làm sạch phù hợp với chất liệu. Trước khi sử dụng bất kỳ dung dịch vệ sinh nào, nên thử trên một vùng nhỏ, khuất của túi để kiểm tra khả năng phai màu.</p>

<h2>NOVA TOTE – Giữ túi đẹp để đồng hành cùng bạn mỗi ngày</h2>

<p>Một chiếc túi tote được chăm sóc đúng cách không chỉ giữ được vẻ ngoài sạch đẹp mà còn giúp kéo dài thời gian sử dụng. Chỉ với những thói quen đơn giản như vệ sinh định kỳ, tránh mang đồ quá nặng và bảo quản nơi khô ráo, bạn đã có thể giữ chiếc túi yêu thích luôn trong tình trạng tốt.</p>

<p>Với <strong>NOVA TOTE</strong>, mỗi chiếc túi không chỉ là phụ kiện thời trang mà còn là người bạn đồng hành trong học tập, công việc và những trải nghiệm thường ngày.</p>

<p><strong>Khám phá các mẫu túi tote tại NOVA TOTE</strong> để lựa chọn sản phẩm phù hợp với phong cách và nhu cầu sử dụng của bạn.</p>
    `
  },

  "4": {
    title: "NOVA TOTE – Người bạn đồng hành trong những hành trình hằng ngày",
    date: "07/10/2026",
    author: "NOVA TOTE",
    image: "images/blog-4.jpg",
    content: `

<p>Trong nhịp sống hiện đại, một chiếc túi không chỉ đơn thuần là vật dụng để mang theo đồ dùng cá nhân mà còn trở thành phụ kiện thể hiện phong cách và cá tính của mỗi người. Với thiết kế trẻ trung, tiện dụng và dễ dàng kết hợp cùng nhiều trang phục, <strong>NOVA TOTE</strong> mong muốn trở thành người bạn đồng hành đáng tin cậy trong những hành trình hằng ngày của giới trẻ.</p>

<h2>1. NOVA TOTE – Khi thời trang kết hợp cùng sự tiện lợi</h2>

<p>Ngày nay, người tiêu dùng không chỉ quan tâm đến vẻ ngoài của một chiếc túi mà còn chú trọng đến tính ứng dụng trong cuộc sống. Một chiếc túi tote phù hợp cần đáp ứng được nhu cầu mang theo đồ dùng cá nhân, đồng thời tạo điểm nhấn cho phong cách thời trang.</p>

<p>Hiểu được điều đó, <strong>NOVA TOTE</strong> hướng đến những thiết kế đơn giản, hiện đại và linh hoạt, giúp người dùng dễ dàng sử dụng trong nhiều hoàn cảnh khác nhau, từ học tập, làm việc đến vui chơi và giải trí.</p>

<h2>2. Đồng hành cùng bạn trên giảng đường</h2>

<p>Đối với học sinh, sinh viên, túi tote là phụ kiện quen thuộc nhờ khả năng mang theo sách vở, tài liệu và những vật dụng cần thiết. Thiết kế dễ sử dụng giúp người trẻ chủ động hơn trong việc chuẩn bị đồ dùng cho một ngày học tập.</p>

<p>Không chỉ tiện lợi, túi tote còn dễ dàng kết hợp với áo thun, quần jeans, chân váy hoặc những trang phục thường ngày, mang đến phong cách trẻ trung và năng động khi đến trường.</p>

<h2>3. Tự tin cùng NOVA TOTE trong môi trường làm việc</h2>

<p>Một chiếc túi tote có thiết kế tối giản cũng là lựa chọn phù hợp cho những người yêu thích phong cách thanh lịch tại nơi làm việc. Với kiểu dáng linh hoạt, túi có thể kết hợp cùng áo sơ mi, quần dài hoặc trang phục công sở đơn giản.</p>

<p>Đặc biệt, việc lựa chọn một chiếc túi có kích thước phù hợp sẽ giúp bạn sắp xếp những vật dụng cần thiết như sổ tay, điện thoại, ví và các phụ kiện cá nhân một cách thuận tiện hơn.</p>

<h2>4. Cùng bạn khám phá những trải nghiệm cuối tuần</h2>

<p>Không chỉ xuất hiện trong môi trường học tập và làm việc, túi tote còn là người bạn đồng hành trong những buổi dạo phố, gặp gỡ bạn bè hoặc những chuyến đi ngắn ngày.</p>

<p>Một chiếc túi tote gọn nhẹ giúp bạn mang theo những vật dụng cần thiết mà không cần chuẩn bị quá cầu kỳ. Dù là buổi cà phê cuối tuần hay chuyến khám phá địa điểm mới, túi tote vẫn có thể trở thành điểm nhấn thời trang cho trang phục.</p>

<h2>5. Thể hiện cá tính qua từng chiếc túi tote</h2>

<p>Mỗi người đều có phong cách và sở thích riêng. Có người yêu thích sự tối giản, nhẹ nhàng, trong khi những người khác lại muốn tạo dấu ấn bằng màu sắc nổi bật và phong cách năng động.</p>

<p>Với khả năng kết hợp linh hoạt cùng nhiều loại trang phục, túi tote giúp người dùng thể hiện cá tính theo cách tự nhiên. Chỉ cần thay đổi màu sắc hoặc cách phối đồ, bạn đã có thể tạo nên diện mạo mới phù hợp với từng hoàn cảnh.</p>

<h2>6. NOVA TOTE – Hướng đến phong cách sống năng động của giới trẻ</h2>

<p>Với định hướng xây dựng thương hiệu túi tote dành cho thế hệ trẻ, <strong>NOVA TOTE</strong> chú trọng sự kết hợp giữa tính tiện dụng, phong cách thời trang và trải nghiệm sử dụng hằng ngày.</p>

<p>Thương hiệu mong muốn mỗi chiếc túi không chỉ đáp ứng nhu cầu mang theo vật dụng cá nhân mà còn góp phần giúp người dùng tự tin thể hiện bản thân trong học tập, công việc và cuộc sống.</p>

<h2>7. Mỗi hành trình đều có câu chuyện riêng</h2>

<p>Từ những buổi sáng đến trường, những ngày làm việc bận rộn đến các cuộc hẹn cuối tuần, mỗi hành trình đều mang theo những trải nghiệm và kỷ niệm đáng nhớ.</p>

<p><strong>NOVA TOTE</strong> tin rằng một chiếc túi phù hợp có thể trở thành người bạn đồng hành quen thuộc, cùng bạn lưu giữ những khoảnh khắc giản dị nhưng ý nghĩa trong cuộc sống.</p>

<h2>NOVA TOTE – Mang theo phong cách, đồng hành cùng trải nghiệm</h2>

<p>Không cần quá cầu kỳ để tạo nên phong cách riêng, đôi khi chỉ một chiếc túi tote đơn giản cũng đủ giúp bạn hoàn thiện trang phục và tự tin hơn trong những hoạt động thường ngày.</p>

<p>Với tinh thần trẻ trung, linh hoạt và hiện đại, <strong>NOVA TOTE</strong> mong muốn đồng hành cùng bạn trên mọi hành trình, từ những hoạt động quen thuộc đến những trải nghiệm mới mẻ.</p>

<p><strong>Khám phá bộ sưu tập túi tote của NOVA TOTE</strong> và lựa chọn chiếc túi phù hợp để cùng bạn viết tiếp những câu chuyện mỗi ngày.</p>
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
