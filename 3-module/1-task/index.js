function namify(users) {
  let names = [];
  users.forEach((el, i) => 
    names[i] = users[i].name);
  return names;
}