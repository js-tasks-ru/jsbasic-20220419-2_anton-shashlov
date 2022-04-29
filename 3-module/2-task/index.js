//Anton Shashlov
function filterRange(arr, a, b) {
  let filtred = arr.filter(element => 
    element >= a && element <= b);
  return filtred;
}
