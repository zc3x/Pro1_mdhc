

function toPay() {
  let pwd = document.getElementById("pwd").value.trim()
  if (pwd.length !== 6) {
    alert('密码错误')
    return;
  }
  document.getElementById("payPage").style.display = "none"
  document.getElementById("loading").style.display = "block"

  setTimeout(() => {
    document.getElementById("loading").style.display = "none"
    document.getElementById("success").style.display = "block"
    setTimeout(() => {
      location.reload();
    }, 3000)
  }, 2000)
}
