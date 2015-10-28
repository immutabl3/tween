module.exports = function(k) {
    return k === 0 ? 0 : Math.pow(1024, k - 1);
};