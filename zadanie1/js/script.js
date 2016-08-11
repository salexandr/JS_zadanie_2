var x = prompt ('Введите число');
var n = prompt ('Введите степень');
    x = +x;
    n = +n;
    x = Math.floor(x);
    n = Math.floor(n);

if (n == 0){
x = 1;
alert (x);
} else {
  if (n == 1){
  x=x;
  alert (x);
  } else {
    if (n < 0){
    var a = 1/pow (x, n);
    } else {
      a = pow (x, n);
    }
  }
}

function pow(x, n) {
  if (n < 0){n = -n}
  var c = x;
  c = +c;
  for (var i = 1; i < n; i++){ 
  c = c*x;
  }

  return c;
}

console.log(a);

