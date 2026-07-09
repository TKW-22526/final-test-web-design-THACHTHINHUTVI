// =========================================================
// 1. MẢNG DỮ LIỆU SẢN PHẨM QUẦN ÁO THỜI TRANG (Cấu trúc gốc)
// =========================================================
const products = [
    {
        id: "sp01",
        name: "Áo Khoác Blazer Nam Nữ Dáng Suông",
        price: "450.000",
        image: "../assets/images/ÁO.jpg",
        description: "Chất liệu tuyết mưa cao cấp, đứng phom, đường may tỉ mỉ, phù hợp mặc đi làm hoặc đi chơi.",
        link: "chi-tiet.html"
    },
    {
        id: "sp02",
        name: "Áo Thun Cotton Basic Unisex",
        price: "180.000",
        image: "../assets/images/AO COTTION.jpg",
        description: "100% Cotton co giãn 4 chiều, thấm hút mồ hôi cực tốt, không xù lông khi giặt máy.",
        link: "chi-tiet.html"
    },
    {
        id: "sp03",
        name: "Quần Jean Baggy Ống Rộng Thời Trang",
        price: "320.000",
        image: "../assets/images/quan jean.jpg",
        description: "Vải jean dày dặn, màu xanh basic thời thượng, dễ phối với mọi loại áo thun và sơ mi.",
        link: "chi-tiet.html"
    },
    {
        id: "sp04",
        name: "Đầm Voan Hoa Nhí Dáng Xòe Thanh Lịch",
        price: "390.000",
        image: "../assets/images/vay.jpg",
        description: "Chất voan tơ mềm mại có lót trong, họa tiết hoa nhí nhẹ nhàng, tôn dáng thanh lịch.",
        link: "chi-tiet.html"
    },
    {
        id: "sp05",
        name: "Áo Sơ Mi Lụa Dài Tay Công Sở",
        price: "290.000",
        image: "../assets/images/so-mi.jpg",
        description: "Chất lụa mềm mịn, mát tay, không nhăn, phom dáng thanh lịch tôn dáng công sở.",
        link: "chi-tiet.html"
    },
    {
        id: "sp06",
        name: "Quần Tây Âu Nữ Dáng Hàn Quốc",
        price: "350.000",
        image: "../assets/images/quan-tay.jpg",
        description: "Chất vải co giãn nhẹ, đứng phom, đường may tỉ mỉ, phù hợp đi làm hoặc đi tiệc.",
        link: "chi-tiet.html"
    },
    {
        id: "sp07",
        name: "Chân Váy Chữ A Lưng Cao",
        price: "220.000",
        image: "../assets/images/chan-vay.jpg",
        description: "Thiết kế trẻ trung, dễ dàng phối cùng áo thun hoặc sơ mi, có quần bảo hộ bên trong.",
        link: "chi-tiet.html"
    },
    {
        id: "sp08",
        name: "Áo Kiểu Trễ Vai Voan Tơ Nữ Tính",
        price: "245.000",
        image: "../assets/images/tre-vai-nu.jpg",
        description: "Chất voan tơ mềm mại, bồng bềnh, thiết kế bo chun trễ vai quyến rũ, thích hợp đi chơi, hẹn hò.",
        link: "chi-tiet.html"
    },
    {
        id: "sp09",
        name: "Chân Váy Tennis Xếp Ly Lưng Cao",
        price: "185.000",
        image: "../assets/images/vay-tennis.jpg",
        description: "Chất tuyết mưa dày dặn, xếp ly đều nếp, có sẵn quần bảo hộ bên trong, dễ phối cùng áo thun và áo croptop.",
        link: "chi-tiet.html"
    },
    {
        id: "sp10",
        name: "Đầm Maxi Đi Biển Dáng Dài Đan Dây",
        price: "450.000",
        image: "../assets/images/maxi-nu.jpg",
        description: "Vải lanh thô mát lạnh, mỏng nhẹ, thiết kế hở lưng đan dây quyến rũ, cực kỳ tôn dáng khi chụp ảnh ngoài bãi biển.",
        link: "chi-tiet.html"
    },
    {
        id: "sp11",
        name: "Áo Blazer Dạ Tweed Tiểu Thư Sang Chảnh",
        price: "520.000",
        image: "../assets/images/blazer-tweed.jpg",
        description: "Chất vải dạ Tweed cao cấp, dệt kim tuyến nhẹ, khuy ngọc trai lấp lánh, mang lại vẻ ngoài thanh lịch và sang trọng.",
        link: "chi-tiet.html"
    },
    {
        id: "sp12",
        name: "Quần Ống Rộng Cạp Cao Khóa Trước",
        price: "290.000",
        image: "../assets/images/quan-ong-rong.jpg",
        description: "Chất vải vitex đứng phom, lưng siêu cao giúp kéo dài chân, che khuyết điểm đùi to và eo thô cực tốt.",
        link: "chi-tiet.html"
    },
    {
        id: "sp13",
        name: "Áo Sơ Mi Kiểu Hàn Quốc Cổ Thắt Nơ",
        price: "260.000",
        image: "../assets/images/so-mi-no.jpg",
        description: "Chất lụa ngọc trai mịn màng, thiết kế cổ thắt nơ nhẹ nhàng, phù hợp cho các cô nàng công sở thanh lịch.",
        link: "chi-tiet.html"
    },
    {
        id: "sp14",
        name: "Set Bộ Đồ Ngủ Lụa Satin Cao Cấp",
        price: "320.000",
        image: "../assets/images/pijama-lua.jpg",
        description: "Vải lụa satin loại 1 siêu bóng mịn, thoáng mát, không gây bí bách, đường may viền tỉ mỉ mặc nhà cực xinh.",
        link: "chi-tiet.html"
    },
    {
        id: "sp15",
        name: "Áo Yếm Len Dệt Kim Ôm Dáng",
        price: "165.000",
        image: "../assets/images/ao-yem-len.jpg",
        description: "Chất len gân dệt kim co giãn cực tốt, ôm sát đường cong cơ thể, phong cách cá tính và quyến rũ.",
        link: "chi-tiet.html"
    },
   {
    id: "sp16",
    name: "Áo Croptop Sọc Ngang Cổ Vuông",
    price: "150.000",
    image: "../assets/images/croptop-soc.jpg",
    description: "Chất thun gân co giãn, họa tiết sọc ngang trẻ trung, tôn vòng hai thon gọn.",
    link: "chi-tiet.html"
  },
  {
    id: "sp17",
    name: "Quần Short Jean Nữ Cạp Cao",
    price: "195.000",
    image: "../assets/images/short-jean.jpg",
    description: "Vải jean denim co giãn nhẹ, ống rộng vừa phải tạo cảm giác thoải mái khi vận động.",
    link: "chi-tiet.html"
  },
  {
    id: "sp18",
    name: "Áo Khoác Bomber Gió Unisex",
    price: "380.000",
    image: "../assets/images/bomber-gio.jpg",
    description: "Vải dù 2 lớp chống thấm nước nhẹ, phom rộng cá tính, thích hợp cho cả nam và nữ.",
    link: "chi-tiet.html"
  },
  {
    id: "sp19",
    name: "Váy Hai Dây Suông Dáng Dài",
    price: "290.000",
    image: "../assets/images/vay-2-day.jpg",
    description: "Chất lụa giấy mỏng mát, dáng suông che khuyết điểm tốt, dễ phối cùng áo khoác mỏng.",
    link: "chi-tiet.html"
  },
  {
    id: "sp20",
    name: "Áo Sơ Mi Nhung Tăm Unisex",
    price: "275.000",
    image: "../assets/images/somi-nhung.jpg",
    description: "Chất nhung tăm dày dặn, màu sắc vintage độc đáo, mặc làm áo khoác ngoài cực phong cách.",
    link: "chi-tiet.html"
  },
  {
    id: "sp21",
    name: "Quần Jogger Thun Nỉ Thể Thao",
    price: "240.000",
    image: "../assets/images/jogger-ni.jpg",
    description: "Vải nỉ chân cua cao cấp, bo chun gấu quần gọn gàng, phù hợp tập thể thao hoặc dạo phố.",
    link: "chi-tiet.html"
  },
  {
    id: "sp22",
    name: "Áo Hoodie Nỉ Bông Phom Rộng",
    price: "350.000",
    image: "../assets/images/hoodie-ni.jpg",
    description: "Chất nỉ ngoại lót bông dày dặn, mũ trùm 2 lớp đứng phom, giữ ấm tốt cho mùa lạnh.",
    link: "chi-tiet.html"
  },
  {
    id: "sp23",
    name: "Chân Váy Jean Dáng Dài Xẻ Tà",
    price: "310.000",
    image: "../assets/images/chan-vay-jean.jpg",
    description: "Vải jean không co giãn giúp đứng dáng, thiết kế xẻ tà trước quyến rũ và dễ di chuyển.",
    link: "chi-tiet.html"
  },
  {
    id: "sp24",
    name: "Áo Len Cardigan Thêu Hoa",
    price: "365.000",
    image: "../assets/images/cardigan-len.jpg",
    description: "Chất len dệt mềm mại, điểm xuyết họa tiết thêu hoa thủ công ngọt ngào, thắt nút gỗ vintage.",
    link: "chi-tiet.html"
  },
  {
    id: "sp25",
    name: "Áo Corset Ren Phối Gọng",
    price: "210.000",
    image: "../assets/images/corset-ren.jpg",
    description: "Thiết kế ôm khít có gọng định hình tôn dáng, phối ren lưới tinh tế, phù hợp mặc trong blazer.",
    link: "chi-tiet.html"
  },
  {
    id: "sp26",
    name: "Áo Croptop Thun Gân Cổ U",
    price: "135.000",
    image: "../assets/images/croptop-co-u.jpg",
    description: "Chất thun gân ôm sát tôn dáng, thiết kế cổ U trẻ trung, dễ phối cùng quần cạp cao.",
    link: "chi-tiet.html"
  },
  {
    id: "sp27",
    name: "Quần Jean Nữ Cạp Cao Ống Rộng",
    price: "320.000",
    image: "../assets/images/jean-nu-ong-rong.jpg",
    description: "Vải denim dày dặn đứng phom tốt, gấu quần xả lai nhẹ tạo điểm nhấn cá tính.",
    link: "chi-tiet.html"
  },
  {
    id: "sp28",
    name: "Chân Váy Kaki Chữ A Túi Hộp",
    price: "245.000",
    image: "../assets/images/vay-kaki-tui-hop.jpg",
    description: "Chất kaki dày dặn, thiết kế túi hộp hai bên hông năng động, có sẵn quần lót bảo hộ.",
    link: "chi-tiet.html"
  },
  {
    id: "sp29",
    name: "Đầm Dự Tiệc Trễ Vai Đính Đá",
    price: "650.000",
    image: "../assets/images/dam-du-tiec.jpg",
    description: "Chất vải tafta cao cấp đứng phom sang trọng, thiết kế trễ vai quyến rũ đính đá lấp lánh.",
    link: "chi-tiet.html"
  },
  {
    id: "sp30",
    name: "Áo Sơ Mi Chiffon Phối Bèo Cổ",
    price: "260.000",
    image: "../assets/images/somi-chiffon-beo.jpg",
    description: "Chất vải chiffon cát mỏng nhẹ, phối bèo dọc bo tay điệu đà, thích hợp cho nàng công sở.",
    link: "chi-tiet.html"
  },
  {
    id: "sp31",
    name: "Quần Parachute Vải Dù Ống Rộng",
    price: "310.000",
    image: "../assets/images/quan-parachute-nu.jpg",
    description: "Vải dù siêu nhẹ thời thượng, thiết kế dây rút ở gấu quần tùy chỉnh linh hoạt độ bo.",
    link: "chi-tiet.html"
  },
  {
    id: "sp32",
    name: "Áo Khoác Da Croptop Nữ",
    price: "550.000",
    image: "../assets/images/khoac-da-croptop.jpg",
    description: "Chất liệu da PU cao cấp không bong tróc, thiết kế khóa kéo kim loại xéo cực ngầu.",
    link: "chi-tiet.html"
  },
  {
    id: "sp33",
    name: "Váy Sườn Xám Cách Tân Dáng Ngắn",
    price: "420.000",
    image: "../assets/images/suon-xam-cach-tan.jpg",
    description: "Chất vải gấm hoa ẩn sang trọng, phối cổ tàu truyền thống kết hợp khóa kéo lưng tiện lợi.",
    link: "chi-tiet.html"
  },
  {
    id: "sp34",
    name: "Áo Thun Polo Nữ Dệt Kim",
    price: "220.000",
    image: "../assets/images/polo-nu-det-kim.jpg",
    description: "Chất len dệt kim mỏng nhẹ thoáng mát, bo chun nhẹ ở gấu áo tạo nét trẻ trung.",
    link: "chi-tiet.html"
  },
  {
    id: "sp35",
    name: "Quần Giả Váy Xếp Ly Lưng Cao",
    price: "195.000",
    image: "../assets/images/quan-gia-vay.jpg",
    description: "Phía trước giả chân váy xếp ly nữ tính, phía sau là quần đùi kín đáo, chất vải trượt dày dặn.",
    link: "chi-tiet.html"
  },
  {
    id: "sp36",
    name: "Áo Len Trễ Vai Tay Dài",
    price: "240.000",
    image: "../assets/images/len-tre-vai.jpg",
    description: "Chất len tăm co giãn ôm sát body, bẻ vai ngang khoe trọn xương quai xanh quyến rũ.",
    link: "chi-tiet.html"
  },
  {
    id: "sp37",
    name: "Đầm Babydoll Tơ Óng Dáng Xòe",
    price: "340.000",
    image: "../assets/images/dam-babydoll-to.jpg",
    description: "Vải tơ óng bồng bềnh có lót trong, phom xòe rộng hạ eo cao giúp giấu bụng cực tốt.",
    link: "chi-tiet.html"
  },
  {
    id: "sp38",
    name: "Áo Khoác Blazer Linen Mỏng Mát",
    price: "380.000",
    image: "../assets/images/blazer-linen-nu.jpg",
    description: "Chất linen tự nhiên nhẹ tênh, thấm hút mồ hôi hiệu quả, phù hợp phối layer ngày hè.",
    link: "chi-tiet.html"
  },
  {
    id: "sp39",
    name: "Quần Legging Nữ Nâng Vòng Ba",
    price: "165.000",
    image: "../assets/images/legging-nang-co.jpg",
    description: "Chất thun co giãn 4 chiều dày dặn, đường may định hình giúp thon gọn đùi và tôn dáng.",
    link: "chi-tiet.html"
  },
  {
    id: "sp40",
    name: "Chân Váy Tầng Voan Lưới",
    price: "230.000",
    image: "../assets/images/chan-vay-voan-tang.jpg",
    description: "Thiết kế xếp tầng bồng bềnh, cạp chun co giãn tốt phong cách tiểu thư ngọt ngào.",
    link: "chi-tiet.html"
  },
  {
    id: "sp41",
    name: "Áo Kiểu Trễ Vai Phối Bèo Tầng",
    price: "235.000",
    image: "../assets/images/tre-vai-beo.jpg",
    description: "Chất vải voan tơ mềm mại, bèo tầng trước ngực điệu đà thích hợp đi hẹn hò, tiệc nhẹ.",
    link: "chi-tiet.html"
  },
  {
    id: "sp42",
    name: "Quần Short Kaki Túi Hộp Nữ",
    price: "155.000",
    image: "../assets/images/short-kaki-nu.jpg",
    description: "Chất kaki cotton co giãn nhẹ, lưng chun phía sau thoải mái vận động dạo phố.",
    link: "chi-tiet.html"
  },
  {
    id: "sp43",
    name: "Đầm Body Thun Gân Cổ Polo",
    price: "280.000",
    image: "../assets/images/dam-body-thun-gan.jpg",
    description: "Chất thun gân dày dặn ôm sát đường cong, cổ polo lịch sự nhưng vẫn quyến rũ.",
    link: "chi-tiet.html"
  },
  {
    id: "sp44",
    name: "Áo Thun Oversize Form Giấu Quần",
    price: "185.000",
    image: "../assets/images/thun-nu-oversize.jpg",
    description: "Chất cotton 100% định lượng cao, hình in sắc nét không bong tróc khi giặt máy.",
    link: "chi-tiet.html"
  },
  {
    id: "sp45",
    name: "Quần Tây Nữ Ống Đứng Lịch Lãm",
    price: "295.000",
    image: "../assets/images/quan-tay-nu-dung.jpg",
    description: "Chất vải tuyết mưa cao cấp chống nhăn, phom đứng chuẩn chỉnh tôn chiều cao đi làm.",
    link: "chi-tiet.html"
  },
  {
    id: "sp46",
    name: "Chân Váy Đuôi Cá Dáng Dài",
    price: "280.000",
    image: "../assets/images/vay-duoi-ca.jpg",
    description: "Thiết kế ôm nhẹ hông và xòe nhẹ ở gấu tạo hiệu ứng thướt tha, tôn dáng thanh lịch.",
    link: "chi-tiet.html"
  },
  {
    id: "sp47",
    name: "Áo Croptop Sơ Mi Cổ Đức",
    price: "185.000",
    image: "../assets/images/croptop-somi.jpg",
    description: "Thiết kế cổ đức lịch sự cắt ngắn dáng croptop cá tính, phối túi ngực thời thượng.",
    link: "chi-tiet.html"
  },
  {
    id: "sp48",
    name: "Quần Biker Short Thun Tăm",
    price: "115.000",
    image: "../assets/images/biker-short.jpg",
    description: "Thiết kế ôm sát đùi năng động, chất thun tăm co giãn tốt cho các hoạt động thể thao.",
    link: "chi-tiet.html"
  },
  {
    id: "sp49",
    name: "Đầm Dạ Hội Cổ Yếm Xẻ Tà",
    price: "580.000",
    image: "../assets/images/dam-da-hoi.jpg",
    description: "Vải lụa cao cấp rủ nhẹ tạo độ mượt, thiết kế cổ yếm sang trọng kết hợp xẻ đùi sâu.",
    link: "chi-tiet.html"
  },
  {
    id: "sp50",
    name: "Áo Khoác Cardigan Chống Nắng",
    price: "180.000",
    image: "../assets/images/cardigan-nang.jpg",
    description: "Chất thun lạnh thông hơi đạt chuẩn UPF 50+, thiết kế tay xỏ ngón tiện lợi khi đi xe.",
    link: "chi-tiet.html"
  }
];

// =========================================================
// 2. CÁC HÀM TẠO GIAO DIỆN (Giữ nguyên vẹn 100% của bạn)
// =========================================================
function createItem(obj) {
    const listProducts = document.getElementById("product-list"); 
    if (!listProducts) return;

    const item = document.createElement("div"); 
    item.setAttribute("class", "product-card-box");

    const containerImage = document.createElement("div"); 
    containerImage.setAttribute("class", "Image"); 

    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", obj.name);
    img.setAttribute("class", "product-img-style");

    containerImage.appendChild(img);

    const containerInfo = document.createElement("div"); 
    containerInfo.setAttribute("class", "Info"); 

    const nameProduct = document.createElement("p");
    nameProduct.innerHTML = obj.name;
    nameProduct.setAttribute("class", "product-title-style"); 

    const price = document.createElement("p");
    price.innerHTML = "vnđ " + obj.price;
    price.setAttribute("class", "product-price-style");

    const description = document.createElement("p");
    description.innerHTML = obj.description;
    description.setAttribute("class", "product-desc-style");

    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.setAttribute("href", obj.link + "?id=" + obj.id);
    linkProduct.setAttribute("class", "product-btn-style");

    containerInfo.appendChild(nameProduct);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);
    listProducts.appendChild(item);
}

function loadAllProducts(objArray) {
    if (!objArray || objArray.length === 0) return;
    for (let i = 0; i < objArray.length; i++) {
        createItem(objArray[i]);
    }
}

// =========================================================
// 3. LOGIC XỬ LÝ GIỎ HÀNG & THÔNG BÁO (Tính năng mới thêm vào)
// =========================================================

// Hàm tạo hiệu ứng thông báo popup nhỏ góc phải màn hình
function showToast(message) {
    let toast = document.createElement("div");
    toast.className = "cart-toast";
    toast.innerText = message;
    document.body.appendChild(toast);
    
    // Tự động xóa thông báo sau 2.5 giây
    setTimeout(() => { toast.remove(); }, 2500);
}

// Hàm thêm sản phẩm vào giỏ hàng thực tế lưu bằng LocalStorage
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Lấy danh sách giỏ hiện tại từ bộ nhớ trình duyệt, nếu chưa có thì tạo mảng rỗng
    let cart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    
    // Kiểm tra sản phẩm đã có trong giỏ chưa
    let existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }

    // Lưu lại vào bộ nhớ trình duyệt
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
    
    // Phát thông báo thành công và cập nhật số hiển thị cạnh menu
    showToast(`Đã thêm "${product.name}" vào giỏ hàng thành công!`);
    updateCartBadge();
}

// Hàm đếm tổng số lượng sản phẩm trong giỏ để cập nhật lên Icon cạnh Menu
function updateCartBadge() {
    let cart = JSON.parse(localStorage.getItem("shopping-cart")) || [];
    let totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    
    let badge = document.getElementById("cart-count-badge");
    if (badge) {
        badge.innerText = totalCount;
    }
}

// Khi tải trang xong, tự động cập nhật lại số lượng giỏ hàng cũ đang lưu
document.addEventListener("DOMContentLoaded", updateCartBadge);
