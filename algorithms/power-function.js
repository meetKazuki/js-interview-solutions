function power(b, n) {
  var answer = 1;
  for (var i = 1; i <= n; i++) {
    answer = b * answer;
  }

  return answer;
}

function _power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}
