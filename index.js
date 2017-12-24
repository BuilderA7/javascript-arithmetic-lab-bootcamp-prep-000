a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a,b){
  return a + b;
}

function subtract(a,b) {
  
  return a-b;
}
function multiply(a,b) {
  return a*b;
}
function divide(a,b){
  return (a)/(b);
}
function inc(n) {
  return n+1;
}
function dec(n){
  return n-1;
}
<<<<<<< HEAD
function makeInt(a){
  if (isNaN(a)){
    var message = "Not an Integer";
  }
const int = parseInt(a,10);
return int;
}
function preserveDecimal(a){
 var num = parseFloat(a);
=======
function makeInt(n){
return parseInt('n',10);

}
function preserveDecimal(n){
 var num = parseFloat(n);
>>>>>>> c913dec406c06c341de1821137e5cdf5da5cc6c6
  return num;
}