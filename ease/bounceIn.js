var bounceOut = require('./bounceOut');

module.exports = function(k) {
    return 1 - bounceOut(1 - k);
};