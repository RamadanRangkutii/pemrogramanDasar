let filmRating = function (n) {
  if (n >= 21) {
    return 'DEWASA';
  } else if (n >= 13) {
    return 'REMAJA';
  } else if (n >= 9) {
    return 'BIMBINGAN ORANG TUA';
  } else {
    return 'SEMUA USIA';
  }
};

console.log(filmRating(15));
console.log(filmRating(32));
