let str = "1921680";
let allipaddress = [];
for (let i = 1; i < Math.min(str.length, 4); i++) {
  let currentip = ["", "", "", ""];

  currentip[0] = str.slice(0, i);
  if (!checkvalidip(currentip[0])) {
    continue;
  }
  for (let j = i + 1; j < Math.min(str.length, i + 4); j++) {
    currentip[1] = str.slice(i, j);

    if (!checkvalidip(currentip[1])) {
      continue;
    }

    for (let k = j + 1; k < Math.min(str.length, j + 4); k++) {
      currentip[2] = str.slice(j, k);
      currentip[3] = str.slice(k);

      if (checkvalidip(currentip[2]) && checkvalidip(currentip[3])) {
        allipaddress.push(currentip.join("."));
      }
    }
  }
}

function checkvalidip(str){
    let strno = parseInt(str);
    if(strno > 255) return false;
    return strno.toString().length === str.length;
}

console.log(allipaddress);
