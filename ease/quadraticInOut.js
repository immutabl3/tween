module.exports = function(k) {
    if ((k *= 2) < 1) {
        return 0.5 * k * k;
    }

    return - 0.5 * (--k * (k - 2) - 1);
};