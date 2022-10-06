// let myNotes = [1, 2, 3];
// let myPrice = [];

let inp = document.getElementById("inp");
let btn = document.querySelector(".btn");
let arr = [];
let arrWater = [10, 11, 12, 13, 3, 6, 7, 8, 11, 4, 5, 7];

// btn.addEventListener("click", function () {
//   let valInp = inp.value;
//   arr.push(valInp);
//   console.log(arr);
//   inp.value = "";
// });

btn.addEventListener("click", function () {
  console.log("click");
  let valInp = inp.value;
  arr.push(valInp);
  console.log(arr);
  inp.value = "";
});
console.log(arr);
console.log(arrWater);

function loadWater() {
  console.log(arrWater);
}

document.querySelector(".water__btn").addEventListener("click", loadWater);
