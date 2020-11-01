const process = {};

exports.start = () => {
  process["started"] = Date.now();
  return true;
};
 
exports.stop = () => {
  process["completed"] = Date.now();
  if (process["started"]) { 
    return String(process["completed"] - process["started"]) + " ms"
  } else {
    return "No process running. Be sure to start a process by using [exeTime.start()]"
  }
};

// function genId() {
//   const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJJKLMNOPQRSTUVWXYZ";
//   const numbers = "0123456789";
//   const char = (alphabets + numbers).split("");
//   const id = [];
//   for (let i = 0; i < 8; i++) {
//     id.push(char[Math.floor(Math.random() * (char.length - 1))]);
//   }
//   return id.join("");
// }
