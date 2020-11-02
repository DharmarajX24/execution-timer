const processes = {};

exports.start = (name) => {
  console.log(age || 5);
  const processId = name || genId();
  processes[processId] = { started: Date.now() };
  return { result: true, pid: processId };
};

exports.stop = (name) => {
  if (name) {
    if (processes[name] && processes[name]["started"]) {
      processes[name]["completed"] = Date.now();
      return {
        result: true,
        data:
          name +
          ": " +
          String(processes[name]["completed"] - processes[name]["started"]) +
          " ms",
      };
    } else {
      return {
        result: false,
        data:
          "No process running. Be sure to start a process by using [exeTime.start()]",
      };
    }
  } else {
    return {
      result: false,
      data: "Please provide ID/Name of the process to stop.",
    };
  }
};

function genId() {
  return rn() + ra() + ra() + rn();
}

function rn() {
  return String(Math.floor(Math.random() * 8999) + 1000);
}

function ra() {
  const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let gra = [];
  for (let i = 0; i < 4; i++) {
    gra.push(char[Math.floor(Math.random() * (char.length - 1))]);
  }
  return gra.join("");
}
