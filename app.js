function tipcalculator(){
  var amountspent = document.getElementById("amountspent").value;
  var noofpeople = document.getElementById("noofpeople").value;
  var quality = document.getElementById("quality").value;
  console.log(amountspent);
  console.log(noofpeople);
  console.log(quality);

  var tips = (amountspent * quality)/noofpeople;

  document.getElementById("tips").innerHTML = tips +"$"
}