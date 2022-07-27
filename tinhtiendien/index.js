document.getElementById("tinh").onclick = function() {
    var ten  = document.getElementById("name").value;
    var soKy = document.getElementById("number").value *1;

    if(ten == '') {
        alert('Vui lòng nhập tên');
        return false;
    }

    if(document.getElementById("number").value == '') {
        alert('Vui lòng nhập số điện');
        return false;
    }

    var result = 0;

    if (soKy <= 50) {
        result = soKy * 500;
    } 
    else if (soKy >= 51 && soKy <= 100) {
        result = 50 * 500 + ((soKy - 50) * 650);
    }
    else if (soKy >= 101 && soKy <= 200) {
        result = 50 * 500 + 50 * 650 + ((soKy - 100) * 850 ) ;
    }
    else if (soKy >= 201 && soKy <= 350) {
        result = 50 * 500 + 50 * 650 + 100 * 850 + (soKy - 200) * 1100 ;
    }
    else {
        result = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKy - 350) * 1300;
    }

    var currentFormat = Intl.NumberFormat("vn-VN");
    document.getElementById('showInfoTotal').innerHTML = "<p>Số tiền điện bạn " + ten + " phải trả là: " + currentFormat.format (result) + " vnđ</p>";
}