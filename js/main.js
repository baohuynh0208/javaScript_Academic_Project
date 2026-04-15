
let arrTen = [];
let arrDiem = [];
//Bài 1: Lấy thông tin tên và điểm từ giao diện để đưa vào input chung của ứng dụng


function layDanhSachTen() {
    let arrTagTD = document.querySelectorAll('#tblBody td:nth-child(3)');
    for (let tagTD of arrTagTD) {
        let text = tagTD.innerText;
        arrTen.push(text);
    }

}
// Sự kiện khi window (cửa sổ được load xong mới chạy hàm)
window.onload = (e) => {
    layDanhSachTen();
    layDanhSachDiem();

}
// Gọi hàm 
console.log(arrTen);

function layDanhSachDiem() {
    let arrTagTD2 = document.querySelectorAll('#tblBody td:nth-child(4)');
    for (let tagTD2 of arrTagTD2) {
        let diem = +tagTD2.innerText;
        arrDiem.push(diem);
    }
}
console.log(arrDiem);

let arrMax = [];
// Tinh diem cua sinh vien cao nhat 
document.querySelector('#btnSVCaoDiemNhat').onclick = (e) => {
    let max = 0;
    for (let diem of arrDiem) {
        if (diem > max) {
            max = diem;
        }
    }

    arrMax.push(max);
    console.log('Điểm cao nhất là:' + arrMax)
}

// Tim ra index cua sv co diem cao nhat 

// document.querySelector('#btnSVCaoDiemNhat').onclick = (e) => {
//    let indexMax = 0;
//    let diemMax = arrDiem[indexMax];
//    for (let index in arrDiem) {  
//     // Duyệt qua từng điểm trong mảng
// let diem = arrDiem[index]; //Lấy ra từng điểm trong arrDiem để so sánh với điểm indexMax
//          if(diem > diemMax){
//             indexMax = index;
//             diemMax = diem;
//         }
//     }

//     console.log(indexMax);
import { countExcellent, findIndexMax, findIndexMin, getArrIndexAverage, getArrIndexExcellent } from "../ultil/method.js";
document.querySelector('#btnSVCaoDiemNhat').onclick = (e) => {

    let indexMax = findIndexMax(arrDiem);
    console.log(indexMax);
    //Hiển thị tên và điểm ra giao diện
    document.querySelector('#svGioiNhat').innerHTML = `
    Họ tên: ${arrTen[indexMax]} - Điểm: ${arrDiem[indexMax]}
    `;

}



document.querySelector('#btnSVThapDiemNhat').onclick = (e) => {
    let indexMin = findIndexMin(arrDiem);
    console.log(indexMin);
    document.querySelector('#svYeuNhat').innerHTML = `
    Họ tên: ${arrTen[indexMin]} - Điểm: ${arrDiem[indexMin]}
    `;

}

document.querySelector('#btnSoSVGioi').onclick = (e) => {
    let count = countExcellent(arrDiem);
    console.log(count);
    document.querySelector('#soSVGioi').innerHTML = count;


    let arrIndex = getArrIndexExcellent(arrDiem);
    // [1,3,5]
    for(let viTri of arrIndex){
        document.querySelector("#soSVGioi").innerHTML += `
        <br />
        Họ tên: ${arrTen[viTri]} - Điểm: ${arrDiem[viTri]}
        `
    }


}



document.querySelector('#btnSVDiemHon5').onclick = (e) => {
    let arrIndex = getArrIndexAverage(arrDiem);
    // []
    for(let viTri of arrIndex) {
        document.querySelector('#dsDi      emHon5').innerHTML += ` <br />
        Họ tên: ${arrTen[viTri]} - Điểm: ${arrDiem[viTri]}`
    }
}

//sort: 
/*
    Sắp xếp theo số: 8 7 4 3 9 12 => tăng dần: 3 4 7 8 9 12 (giá trị)
    Sắp xếp theo chữ (chuỗi): từng chữ cái theo chuỗi chữ cái bảng ASKEY
    '111' '12' '0999'
    '0999' '111' '12' 
    => 12 111 999

*/
let arrName = ['Nam','Kha', 'Binh', 'An']