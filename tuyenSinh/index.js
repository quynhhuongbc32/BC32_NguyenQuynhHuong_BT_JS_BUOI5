var diemChuanElem = document.getElementById("diemChuan");
var diemMon1Elem  = document.getElementById("diemMon1");
var diemMon2Elem  = document.getElementById("diemMon2");
var diemMon3Elem  = document.getElementById("diemMon3");
var khuVucElem    = document.getElementById("khuVuc");
var doiTuongElem  = document.getElementById("doiTuong");

document.getElementById("tinh").onclick = function() {
    var khuVuc   = khuVucElem.value;
    var doiTuong = doiTuongElem.value;

    var diemChuan = diemChuanElem.value * 1;

    var diemMon1 = diemMon1Elem.value * 1;
    var diemMon2 = diemMon2Elem.value * 1;
    var diemMon3 = diemMon3Elem.value * 1;

    var diemUuTienKhuVuc = 0;
    var diemUuTienDoiTuong = 0;
    var diemTongKet = 0;

    //validate
    if(diemChuanElem.value == '') {
        alert('Vui lòng nhập điểm chuẩn');
        return false;
    }

    if(diemMon1Elem.value == '') {
        alert('Vui lòng nhập điểm môn 1');
        return false;
    }

    if(diemMon2Elem.value == '') {
        alert('Vui lòng nhập điểm môn 2');
        return false;
    }

    if(diemMon3Elem.value == '') {
        alert('Vui lòng nhập điểm môn 3');
        return false;
    }

    //xác định điểm ưu tiên theo khu vực
    switch (khuVuc) {
        case "khu_vuc0": {
            diemUuTienKhuVuc = 0;
            break;
        }
        case "khu_vucA": {
            diemUuTienKhuVuc = 2;
            break;
        }
        case "khu_vucB": {
            diemUuTienKhuVuc = 1;
            break;
        }
        case "khu_vucC": {
            diemUuTienKhuVuc = 0.5;
            break;
        }
    }

    //xác định điểm ưu tiên theo đối tượng
    switch (doiTuong) {
        case "doi_tuong0": {
            diemUuTienDoiTuong = 0;
            break;
        }
        case "doi_tuong1": {
            diemUuTienDoiTuong = 2.5;
            break;
        }
        case "doi_tuong2": {
            diemUuTienDoiTuong = 1.5;
            break;
        }
        case "doi_tuong3": {
            diemUuTienDoiTuong = 1;
            break;
        }
    }

    //xác định điểm tổng kết
    diemTongKet = diemMon1 + diemMon2 + diemMon3 + diemUuTienKhuVuc + diemUuTienDoiTuong;

    if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        document.getElementById('showInfoTotal').innerHTML =  `Tổng số điểm của bạn là: ${diemTongKet} --- Bạn đã rớt vì có môn bằng 0 điểm`;
    }else{

        ketQua = '';
        if(diemTongKet >= diemChuan) {
            ketQua = 'đậu'
        } else{
            ketQua = 'rớt'
        }

        document.getElementById('showInfoTotal').innerHTML =  `Tổng số điểm của bạn là: ${diemTongKet} --- Bạn đã ${ketQua}`;
    }

}
