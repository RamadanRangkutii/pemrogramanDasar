let kabisat = function (n) {
  if (n % 400 == 0) {
    return 'Kabisat';
  } else if (n % 100 == 0) {
    return 'Bukan Kabisat';
  } else if (n % 4 == 0) {
    return 'Kabisat';
  } else {
    return 'Bukan Kabisat';
  }
};

console.log(kabisat(1900));
console.log(kabisat(2000));
console.log(kabisat(2001));
console.log(kabisat(2016));
