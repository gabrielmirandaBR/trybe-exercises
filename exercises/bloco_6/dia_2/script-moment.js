// Utilizando biblioteca Moment.js
let moment = require('moment');
let brasiltetra = moment('17071994', 'DDMMYYYY');
let fromNow = brasiltetra.fromNow();

console.log(`Gritamos TETRA há: ${fromNow}`);
