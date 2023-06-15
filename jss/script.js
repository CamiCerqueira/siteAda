document.getElementById("botãoEnviar").addEventListener("click", valida)

function valida() {
  if (document.getElementById("name").value != "" && 
  document.getElementById("email").value != "" && 
  document.getElementById("phone").value != "") {
    alert("Prontinho! Você receberá as imagens por email")
   }else {
    alert("Por favor preencha seus dados nos campos de nome, telefone e email.")
}
