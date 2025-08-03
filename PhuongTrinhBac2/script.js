function phuongTrinhBac1(a,b) {
    x = -b/a;
    return x;
}

function phuongTrinhBac2(a,b,c) {
    if(a==0) {
        return phuongTrinhBac1(b,c);
    }else{
        let delta = b * b - 4 * a * c;
        if(delta > 0) {
            let x1 = (-b +Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2* a);
            return `Phuong trinh co 2 nghiem phan biet: x1 = ${x1}, x2 = ${x2}`;
        } else if (delta === 0) {
            let x = -b / (2*a);
            return `Phuong trinh co nghiem kep: x = ${x}`;
        } else {
            return "Phuong trinh vo nghiem";
        }
    }
}

let a1 = parseFloat(prompt("Nhap a:"));
let b1 = parseFloat(prompt("Nhap b:"));
let c1 = parseFloat(prompt("Nhap c:"));
console.log(phuongTrinhBac2(a1,b1,c1));
