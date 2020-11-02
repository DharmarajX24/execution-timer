## Execution Timer

A simple node package to measure execution time of your NodeJS Application


## Getting Started

**1. Installation**

```shell
npm install execution-timer
```

**2. Start a process** 

```javascript
const exeTimer = require("execution-timer")

const newProcess = exeTimer.start("newProcessName")
// ⇨ {result: true, pid: "newProcessName"}
// A random PID is returned if name is not provided.
``` 

**3. Stop a process** 

```javascript
const exeTimer = require("execution-timer")

const newProcess = exeTimer.start("newProcessName")
exeTimer.stop(newProcess.pid)
// ⇨ {result: true, data: "newProcessName: 24 ms"}
// Returns false with an error in data parameter if something goes wrong.
``` 

**3. Stop all processess** 

```javascript
const exeTimer = require("execution-timer")

const newProcess1 = exeTimer.start("newProcessName1") 
const newProcess2 = exeTimer.start("newProcessName2") 

exeTimer.stopAll() // ⇨ true
// Stops all running processes.
``` 

**4. List all processess** 

```javascript
const exeTimer = require("execution-timer")

exeTimer.list() // ⇨ logs a table containing all "completed" processes with their execution time
``` 