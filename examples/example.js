const Interval = require("../");

let i = 0;

const interval = new Interval();
interval.run(() => {
    console.log(i++);
}, 1000);

setTimeout(() => interval.stop(), 5000);