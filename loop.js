var tweens = [];

module.exports = {
    add: function(tween) {
        tweens.push(tween);
    },

    remove: function(tween) {
        var i = tweens.indexOf(tween);
        if (i !== -1) {
            tweens.splice(i, 1);
        }
    },

    update: function(time) {
        if (tweens.length === 0) { return false; }

        time = time || Date.now();

        var i = 0;
        while (i < tweens.length) {
            if (tweens[i].update(time)) {
                i++;
            } else {
                tweens.splice(i, 1);
            }
        }

        return true;
    }
};