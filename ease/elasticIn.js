module.exports = function(k) {
    var s;
    var a = 0.1;
    var p = 0.4;

    if (k === 0) {
        return 0;
    }

    if (k === 1) {
        return 1;
    }

    if (!a || a < 1) {
        a = 1;
        s = p / 4;
    } else {
        s = p * Math.asin(1 / a) / (2 * Math.PI);
    }

    return - (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
};