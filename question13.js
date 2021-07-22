const points = [40, 100, 1, 5, 25, 10];
alert(myArrayMax(points));

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

alert(myArrayMin(points));

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
