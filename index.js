const processes = {};

exports.start = (name) => {
  const processId = name || genId();
  processes[processId] = { "Process ID": processId, started: Date.now() };
  return { result: true, pid: processId };
};

exports.stop = (name) => {
  if (name) {
    if (processes[name] && processes[name]["started"]) {
      processes[name]["completed"] = Date.now();
      processes[name]["time"] =
        String(processes[name]["completed"] - processes[name]["started"]) +
        " ms";
      return {
        result: true,
        data: name + ": " + processes[name]["time"],
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

exports.stopAll = () => {
  try {
    const stopTs = Date.now();
    Object.keys(processes).forEach((processId) => {
      if (!processes[processId]["completed"]) {
        processes[processId]["completed"] = stopTs;
        processes[processId]["time"] =
          String(stopTs - processes[processId]["started"]) + " ms";
      }
    });
    return true;
  } catch (error) {
    return false;
  }
};

exports.list = () => {
  const completed = [];
  Object.keys(processes).forEach((processId) => {
    if (processes[processId]["completed"]) {
      processes[processId];
      completed.push(processes[processId]);
    }
  });
  if (completed.length >= 1) {
    console.table(completed);
    return completed;
  } else {
    const msg =
      'No process was completed. Please use ".stop()" to stop a process or ".stopAll()" to stop all running processes.';
    console.log(msg);
    return msg;
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
