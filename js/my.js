// let myNotes = [1, 2, 3];
// let myPrice = [];

let inp = document.getElementById("inp");
let btn = document.querySelector(".btn");
let arr = [];

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
