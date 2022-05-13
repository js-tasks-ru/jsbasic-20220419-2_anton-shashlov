function toggleText() {
  let buttonHidden = document.body.querySelector('button');
  let text = document.getElementById('text');
  buttonHidden.onclick = () => 
    (text.hidden === false) 
      ? text.hidden = true 
      : text.hidden = false;
}
