## Execution Timer

A simple node package to measure execution time of your NodeJS Application


## Getting Started

**1. Installation**

```shell
npm instal execution-timer
```

**2. Start a process** 

```javascript
const exeTimer = require("execution-timer")

const newProcess = exeTimer.start("newProcessName")
// ⇨ {result: true, pid: "newProcessName"}
// A random ID is returned if name is not provided.
``` 
