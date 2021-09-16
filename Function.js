function CparaF() {
  var GrauC = document.getElementById("grauC");
  var GrauC2 = GrauC.value;
  var GrauC3 = parseFloat(GrauC2);

  var GrauCF = (GrauC3 * 9) / 5 + 32;
  var GrauCF2 = GrauCF.toFixed(1);
  var Element = document.getElementById("grauConvertido");
  var Result = "O resultado de °C para °F é °F " + GrauCF2;
  Element.innerHTML = Result;
}
function CparaK() {
  var GrauC = document.getElementById("grauC");
  var GrauC2 = GrauC.value;
  var GrauC3 = parseFloat(GrauC2);

  var GrauCK = GrauC3 + 273.15;
  var GrauCK2 = GrauCK.toFixed(1);
  var Element = document.getElementById("grauConvertido");
  var Result = "O resultado de °C para K é K " + GrauCK2;
  Element.innerHTML = Result;
}
function FparaC() {
  var GrauF = document.getElementById("grauF");
  var GrauF2 = GrauF.value;
  var GrauF3 = parseFloat(GrauF2);

  var GrauFC = ((GrauF3 - 32) * 5) / 9;
  var GrauFC2 = GrauFC.toFixed(1);
  var Element = document.getElementById("grauConvertido");
  var Result = "O resultado de °F para °C é °C " + GrauFC2;
  Element.innerHTML = Result;
}
function FparaK() {
  var GrauF = document.getElementById("grauF");
  var GrauF2 = GrauF.value;
  var GrauF3 = parseFloat(GrauF2);

  var GrauFK = ((GrauF3 - 32) * 5) / 9 + 273.15;
  var GrauFK2 = GrauFK.toFixed(1);
  var Element = document.getElementById("grauConvertido");
  var Result = "O resultado de °F para K é K " + GrauFK2;
  Element.innerHTML = Result;
}
function KparaC() {
  var GrauK = document.getElementById("grauK");
  var GrauK2 = GrauK.value;
  var GrauK3 = parseFloat(GrauK2);

  var GrauKC = GrauK3 - 273.15;
  var GrauKC2 = GrauKC.toFixed(1);
  var Element = document.getElementById("grauConvertido");
  var Result = "O resultado de K para °C é °C " + GrauKC2;
  Element.innerHTML = Result;
}
function KparaF() {
  var GrauK = document.getElementById("grauK");
  var GrauK2 = GrauK.value;
  var GrauK3 = parseFloat(GrauK2);

  var GrauKF = ((GrauK3 - 273.15) * 9) / 5 + 32;
  var GrauKF2 = GrauKF.toFixed(1);
  var Element = document.getElementById("grauConvertido");
  var Result = "O resultado de K para °F é °F " + GrauK2;
  Element.innerHTML = Result;
}
