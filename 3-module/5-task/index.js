function getMinMax(str) {
  let arr = str.split(' ')
  .map(el => Number(el))
  .filter(el => el);
  let resalt = {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
  return resalt;
}
