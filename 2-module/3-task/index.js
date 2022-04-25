//Anton Shashlov
let calculator = {
 
  read(v1, v2) {
    this.variable1 = v1;
    this.variable2 = v2;
  },
  sum() {
    return this.variable1 + this.variable2;
  },
  mul() {
    return this.variable1 * this.variable2;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
