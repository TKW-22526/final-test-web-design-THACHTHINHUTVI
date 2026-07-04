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
