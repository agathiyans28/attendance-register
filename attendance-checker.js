const data = require("./AttendanceRegister.json");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`>`, (name) => {
  let flag = true;
  i = 0;
  while (i < data.length) {
    let item = data[i];
    let hour = parseFloat(item.checkouttime) - parseFloat(item.checkinTime);
    let workingHours = hour === 1 ? hour + " Hour" : hour + " Hours";
    if (item.employeName === name) {
      console.log(
        item.employeName +
          " " +
          item.date +
          " " +
          item.checkinTime +
          " " +
          item.checkouttime +
          " " +
          item.dept +
          " " +
          workingHours
      );
      flag = false;
    }
    i++;
  }
  if (flag) {
    console.log("Person Not Found...!");
  }
  readline.close();
});
