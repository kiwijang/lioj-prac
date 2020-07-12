import * as readline from 'readline';
import * as fs from 'fs';
// 建立檔案讀取資料流
const inputStream = fs.createReadStream('input.txt');
const rl = readline.createInterface({
  input: inputStream,
});
const lines = [];
rl.on('line', (line) => {
  lines.push(line);
});
function solve(inputlines) {
  for (let i = 0; i < inputlines.length; i += 1) {
    const numArr = inputlines[i].split(' ');
    const a = Number(numArr[0]);
    const b = Number(numArr[1]);
    if (a === 0 && a === b) {
      break;
    } else if (a >= b) {
      console.log(a);
    } else {
      console.log(b);
    }
  }
}
rl.on('close', () => {
  solve(lines);
});
