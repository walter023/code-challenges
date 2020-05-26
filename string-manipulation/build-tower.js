//https://www.codewars.com/kata/576757b1df89ecf5bd00073b
function towerBuilder(floors) {
  const tower = [];
  const str = "*",
    numFloor = floors * 2 - 1;
  let newstr = "",
    dif = 0;
  for (let i = 0; i < floors; i++) {
    newstr = str.repeat(i * 2 + 1);
    dif = numFloor - newstr.length;
    newstr = newstr.padStart(newstr.length + dif / 2);
    newstr = newstr.padEnd(newstr.length + dif / 2);
    tower.push(newstr);
  }
  return tower;
}
