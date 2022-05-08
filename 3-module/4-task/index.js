//Anton Shashlov
function showSalary(users, age) {
  let result = '';
  users.forEach(el => {
    if (el.age <= age) {
      result += '\n' + `${String(el.name)}, ${String(el.balance)}`;
    }
  });
  return result.trim();
}
// ваш код...

