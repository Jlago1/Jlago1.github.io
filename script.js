const button = document.getElementById("teste-match");
const input = document.getElementById("input-match");
button.onclick = function() {
  const name = input.value;
  let re = new RegExp("ISABELA MAYUMI HIRATA DA SILVA");
  re.test(name.toLocaleUpperCase()) ? alert('Parabéns, você tem 100% de compatibilidade com o João Vitor') : alert('Infelizmente você não tem compatibilidade com o João, pergunte a Bela como ter ;)')
}