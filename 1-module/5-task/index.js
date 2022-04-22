//Anton Shashlov
function truncate(str, maxlength) {
  if (str.length < 20) return `${str.slice(0, --maxlength)}`;
  else return `${str.slice(0, --maxlength)}${"…"}`;
}  
