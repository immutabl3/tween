import tween, { update } from './index.js';

tween({ x: 0 })
  .to({ x: 100 })
  .yoyo()
  .repeat(2)
  .onStart(() => {
    console.log('start');
  })
  .onUpdate(value => {
    console.log('value: ', value.x);
  })
  .onComplete(() => {
    console.log('complete');
  })
  .start();

setInterval(function() {
  update();
}, 16);