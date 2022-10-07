// let myNotes = [1, 2, 3];
// let myPrice = [];

let inp = document.getElementById("inp");
let btn = document.querySelector(".btn");
let arr = [];
let priceWater = 33;
let arrWater = [10, 11, 12, 13, 3, 6, 7, 8, 11, 4, 5, 7];

btn.addEventListener("click", function () {
  console.log("click");
  let valInp = inp.value;
  arr.push(valInp);
  console.log(arr);
  inp.value = "";
});
console.log(arr);
console.log(arrWater);

let sum = 0;
function loadWater() {
  let ol = document.createElement("ol");

  for (let i = 0; i < arrWater.length; i++) {
    sum = sum + arrWater[i] * priceWater;
    console.log(sum);
    document.querySelector(".water__load").innerHTML = arrWater[i] * priceWater;
    document.querySelector(".water__sum").innerHTML = sum;
  }
}

document.querySelector(".water__btn").addEventListener("click", loadWater);
