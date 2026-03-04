const payBut = document.getElementById("payBut");
const tip = document.getElementById("tip");

payBut.addEventListener("click",function(){
  tip.textContent = "支付成功，正在跳转...";
  payBut.disabled = true;
  payBut.style.background = "#999";
});
