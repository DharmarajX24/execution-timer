/**
 * Starts a new process.
 * @param {string} name - Name of the process. Defaults to a random ID if name is not provided.
 * @returns success boolean and Process ID (name if provided).
 */
export declare function start(name?: string): { result: boolean, pid: string }

/**
 * Stops a process
 * @param {string} name - Name of the process or ID returned on starting it.
 */
export declare function stop(name: string): { result: boolean, time: string }

/**
 * Stops measuring all running processes.
 * @returns {boolean} - True if stopping all processes was successful.
 */
export declare function stopAll(): boolean

/**
 * Logs all "completed" processes in a table.
 * @returns {any} - Array of completed processes or an alert stating that no process was completed
 */
export declare function list(): any 