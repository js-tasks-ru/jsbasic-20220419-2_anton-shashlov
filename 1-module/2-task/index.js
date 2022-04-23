/* Шашлов Антон
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (( name != null) && ( name.length > 3 )) {
    for (i in name) {
      if ( name[i] === ' ' ) 
      return false;
    }
    { if ( name[i] !== ' ' ) 
      return true;
    }
    
  } else return false;
}// ваш код...

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
