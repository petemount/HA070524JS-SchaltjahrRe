function schaltjahrcheck() {
  let jahr = parseInt(document.getElementById("eingabe").value);
  let result = document.getElementById("result");
  if ((jahr % 4 === 0 && jahr % 100 != 0) || jahr % 400 == 0) {
    result.textContent = `Das Jahr ${jahr} ist ein Schaltjahr. 👍 `;
  } else {
    result.textContent = `Das Jahr ${jahr} ist kein Schaltjahr. 👎 `;
  }
  console.log(jahr);
  console.log(result);
}
