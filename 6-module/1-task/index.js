/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.createElem();
  }
  createTr() {
    this.theadAll = '';
    for (let el of this.rows) {
      this.theadAll +=
      `<thead>
      <tr>
          <td>${el.name}</td>
          <td>${el.age}</td>
          <td>${el.salary}</td>
          <td>${el.city}</td>
          <td><button>X</button></td>
      </tr>
      </thead>`;
    }}
  createElem() {
    this.elem = document.createElement('div');
    let tab = document.createElement('table');
    let tbody = document.createElement('tbody'); 
    tab.innerHTML = 
      `<thead>
      <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
      </tr>
      </thead>`;
    this.elem.prepend(tab);
    tab.append(tbody);
    this.createTr();
    this.deleteRow();
    tbody.innerHTML = this.theadAll;
  }
  deleteRow() {
    this.elem.addEventListener('click', (event) => {
      let target = event.target;
      if (target.tagName != "BUTTON") {return;}
      target.closest('tr').remove();
    });}
}