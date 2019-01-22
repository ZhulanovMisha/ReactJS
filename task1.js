// Callback function
let callback = (i) => window.console.log('Times is equal to ' + i);

// Loop function
let loop = (times = 0, callback = null) => {while (times > 0) { callback(times); times--;}};

// Run "loop" function
loop(5, callback);