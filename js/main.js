function tinhTien() {
    var thuNhapText = document.getElementById("thuNhap").value;
    var vayText = document.getElementById("vay").value;
    var laiText = document.getElementById("lai").value;
    var thoiHanText = document.getElementById("time").value;

    //chuyển thành số
    var thuNhapNumber = Number(thuNhapText);
    var vayNumber = Number(vayText);
    var laiNumber = Number(laiText);
    var thoiHanNumber = Number(thoiHanText);

    //tính
    var tienCoTheTra = thuNhapNumber * 0.6;
    var tienPhaiTra = (vayNumber * (1 + laiNumber)) / thoiHanNumber;

    //in
    var ketQuaTag = document.getElementById("result");
    var alert1Tag = document.getElementById("alert1");
    var alert2Tag = document.getElementById("alert2");


    //xóa p thừa
    ketQuaTag.innerHTML = "";
    alert1Tag.innerHTML = "";
    alert2Tag.innerHTML = "";

    //tạo p
    var tienCoTheTraP = document.createElement("p");
    tienCoTheTraP.textContent = "Số tiền có thể trả mỗi tháng: " + tienCoTheTra.toFixed(2);
    var tienPhaiTraP = document.createElement("p");
    tienPhaiTraP.textContent = "Số tiền phải trả mỗi tháng: " + tienPhaiTra.toFixed(2);

    //add p
    ketQuaTag.appendChild(tienCoTheTraP);
    ketQuaTag.appendChild(tienPhaiTraP);

    document.getElementById("result").style.display = "block";
    document.getElementById("alert1").style.display = "block";
    document.getElementById("alert2").style.display = "block";

    if (isNaN(tienCoTheTra) == true) {
        alert("Nhập số!");
        ketQuaTag.textContent = "";
        return;
    }


    if(tienCoTheTra > tienPhaiTra) {
        alert1Tag.textContent = "Chúc mừng bạn đã đủ điều kiện vay vốn";
        document.getElementById("alert2").style.display = "none";
    } else {
        alert2Tag.textContent = "Rất tiếc, bạn không đủ điều kiện vay vốn";
        document.getElementById("alert1").style.display = "none";  
    }

}

function reset() {
    document.getElementById("thuNhap").value = "";
    document.getElementById("vay").value = "";
    document.getElementById("lai").value = "";
    document.getElementById("time").value = "";
    document.getElementById("result").style.display = "none";
    document.getElementById("alert1").style.display = "none";
    document.getElementById("alert2").style.display = "none";
}

// function isEmpty() {
//     var thuNhap = document.getElementById("thuNhap").value;
//     if(thuNhap == "") {
//         alert("Please enter again!");
//         return false;
//     }
// }


