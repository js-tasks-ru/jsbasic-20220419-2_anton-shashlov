//Anton Shashlov
function hideSelf() {
  let buttonHidden = document.body.querySelector('button');
  return buttonHidden.onclick = () => buttonHidden.hidden = true;
}