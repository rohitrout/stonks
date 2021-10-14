var p1 = document.querySelector("#initial-price");
var q1 = document.querySelector("#quantity");
var p2 = document.querySelector("#current-price");
var btnCalc = document.querySelector("#btn-calc");
var absVal=document.querySelector("#output1");

btnCalc.addEventListener("click", function calculate() {
  if (p1.value * q1.value > p2.value * q1.value) {
    var li = p1.value * q1.value;
    var lc = p2.value * q1.value;
    var l = li - lc;
    var loss = (l * 100) / li;
    console.log("loss", loss);
    absVal.innerText="Loss Amount : "+l;
    document.getElementById("output").innerHTML = "LOSS :" + loss + "%";
  } else {
    var pi = p1.value * q1.value;
    var pc = p2.value * q1.value;
    var p = pc - pi;
    var profit = (p * 100) / pi;
    console.log("profit", profit);
    absVal.innerText="Profit Amount : "+p;
    document.getElementById("output").innerHTML = "PROFIT :" + profit + "%";
  }
  // console.log(p1.value * q1.value);
  // console.log(p2.value);
  // console.log(q1.value);
  //console.log(p2);
  //console.log(q1);
});