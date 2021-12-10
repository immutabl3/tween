import now from './now.js';

const tweens = [];

export default {
  add(tween) {
    tweens.push(tween);
  },

  remove(tween) {
    const i = tweens.indexOf(tween);
    if (i !== -1) {
      tweens.splice(i, 1);
    }
  },

  update(time = now()) {
    if (tweens.length === 0) { return false; }

    let i = 0;
    while (i < tweens.length) {
      if (tweens[i].update(time)) {
        i++;
      } else {
        tweens.splice(i, 1);
      }
    }

    return true;
  },
};