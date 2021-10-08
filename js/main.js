/**
 * *Bài tập 1:
 * *Khối 1:
 * *luongNgay
 * *ngayLam
 *
 * *Khối 2:
 * *B1: Tạo biến và gán giá trị.
 * *B2: Tính tiền lương nhân viên
 *      *luongNhanVien = luongNgay*ngayLam
 * *B3: In ra kết quả
 *
 * *Khối 3:
 * *luongNhanVien
 */
function tienLuong() {
  var luongNgay = document.getElementById("salaryDay").value;
  var ngayLam = document.getElementById("doDay").value;
  console.log(salaryDay, doDay);
  var luongNhanVien = luongNgay * ngayLam;
  document.getElementById("result__b1").innerHTML =
    "Kết quả là: " + luongNhanVien;
}
document.getElementById("btn__salary").onclick = tienLuong;

/**
 * *Bài tập 2:
 * *Khối 1:
 * *soMot
 * *soHai
 * *soBa
 * *soBon
 * *soNam
 *
 * *Khối 2:
 * *B1: Tạo biến và lấy giá trị
 * *B2: Tính giá trị trung bình
 *    *aveVal = (soMot + soHai + soBa + soBon +soNam)/5
 * *B3: In kết quả
 *
 * *Khối 3:
 * *aveVal
 */
function average() {
  var soMot = document.getElementById("soThuNhat").value;
  var soHai = document.getElementById("soThuHai").value;
  var soBa = document.getElementById("soThuBa").value;
  var soBon = document.getElementById("soThuTu").value;
  var soNam = document.getElementById("soThuNam").value;
  var aveVal =
    (Number(soMot) +
      Number(soHai) +
      Number(soBa) +
      Number(soBon) +
      Number(soNam)) /
    5;
  document.getElementById("result__b2").innerHTML = "Kết quả là: " + aveVal;
}
document.getElementById("btn__average").onclick = average;

/**
 * *Bài tập3:
 * *Khối 1:
 * *moneyUSD
 *
 * *Khối 2:
 * *B1: Tạo biến và là giá trị từ người dùng
 * *B2: Công thức đổi tiền VND --> tiền USD
 *    *moneyVn = moneyUSD*23500
 * *B3: In kết quả
 *
 * *Khối 3:
 * *moneyVN
 */
function changeMoney() {
  const oneVND = 23500;
  var moneyUSD = document.getElementById("moVal").value;
  var moneyVN = moneyUSD * oneVND;
  document.getElementById("result__b3").innerHTML =
    "Kết quả là: " + new Intl.NumberFormat("vn-VN").format(moneyVN);
}
document.getElementById("btn__money").onclick = changeMoney;

/**
 * *Bài tập 4:
 * *Khối 1:
 * *reHeight
 * *reWidth
 * *Khối 2:
 * *Tạo và lấy giá trị từ người dùng
 * *Áp dụng công thức diện tích và chu vi hcn
 * *    areaTang = reHeight * reWidth
 * *    perTang  = (reHeight + reWidth) * 2
 * *in kết quá
 *
 * *Khối 3:
 * *areaTang
 * *perTang
 */
function areaAndPer() {
  var reHeight = document.getElementById("height").value;
  var reWidth = document.getElementById("width").value;
  var areaTang = reHeight * reWidth;
  var perTang = (Number(reHeight) + Number(reWidth)) * 2;
  document.getElementById("result__b4").innerHTML =
    "Diện tích:" + areaTang + "; " + "Chu vi: " + perTang;
}
document.getElementById("btn__cube").onclick = areaAndPer;

/**
 * *Bài tập 5:
 * *Khối 1:
 * *numVal
 *
 * *Khối 2:
 * *Tạo biến và lấy giá trị từ người dùng
 * *lấy hàng chục
 * *    numTen = numVal/10
 * *Lấy hàng đơn vị
 * *    numUni = numVal%10
 * *Tính tổng
 * *    sumNum = numTen + numUni
 * *In kết quả
 *
 * *Khối 3:
 * *    sumNum
 */
function sum() {
  var numVal = document.getElementById("tenNum").value;
  // console.log(numVal);
  var numTen = Math.floor(numVal / 10);
  var numUni = numVal % 10;
  var sumNum = Number(numTen) + Number(numUni);
  // console.log(sumNum);
  document.getElementById("result__b5").innerHTML = "Kết quả là: " + sumNum;
}
document.getElementById("btn__sum").onclick = sum;
console.log(sum);
