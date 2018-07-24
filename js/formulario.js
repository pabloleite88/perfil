function enviar() {
  var nome= document.getElementById("formNome");

  if (nome.value != "") {
    alert("Obrigado " + nome.value+ "!");
  } else {
    alert("Por gentileza, coloque seus dados");
  }

}
