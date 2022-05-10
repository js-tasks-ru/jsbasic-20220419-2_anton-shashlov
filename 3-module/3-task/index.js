//Anton Shashlov
function camelize(str) {
  
  let newArr = '';
  let arr = str.split('-');
    
  arr.forEach(element => {
    newArr += element.charAt(0).toUpperCase() + element.slice(1);
  });
  
  (str[0] === '-')
  ? newArr 
  : newArr = newArr.charAt(0).toLowerCase() + newArr.slice(1);
  
  return newArr; 
}