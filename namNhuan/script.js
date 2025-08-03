function tinhNamNhuan(nam){
    if((nam%4===0 && nam % 100 !==0) || (nam%400===0)) {
        return `Nam ${nam} la nam nhuan`;
    } else {
        return `Nam ${nam} khong phai nam nhuan`;
    }
}

function thang2(nam){
    if((nam%4===0 && nam % 100 !==0) || (nam%400===0)) {
        return "thang 2 có 29 ngay";
    } else {
        return "thang 2 có 28 ngay";
    }
}

function soNgayTrongThang(thang){
    if (thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        return `Thang ${thang} co 30 ngay`
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8|| thang == 10 || thang == 12) {
        return `thang ${thang} có 31 ngay`
    } else {
        return thang2(nam);
    }
}

let ngay = parseFloat(prompt("Nhap so ngay:"))
let thang = parseFloat(prompt("Nhap so thang:"))
let nam = parseFloat(prompt("Nhap so nam:"))
console.log(soNgayTrongThang(thang));
console.log(tinhNamNhuan(nam));