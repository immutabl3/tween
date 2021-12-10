# micro-tween

A trimmed down, modern version of [sole's tween.js](https://github.com/tweenjs/tween.js/) for treeshaking

`npm i micro-tween`

### notable changes

Easing functions are located in `micro-tween/ease` to be imported to save on file size. Polyfills for `window.performance.now` have been removed in favor of `Date.now` (keeping node support via process.hrtime).

Additional removals:
* no interpolation
* no string relative values
* no safety checks
* no `this` context in functions, use passed object
* no constructor function/generated code
* no `getAll`/`removeAll` tweens

Everything else should work!

### Example

```js
import tween, {
  update,
  elasticInOut
} from 'micro-tween';

tween({ x: 0 })
  .to({ x: 100 })
  .yoyo()
  .repeat(2)
  .ease(elasticInOut)
  .onStart(function() {
    console.log('start');
  })
  .onUpdate(function(value) {
    console.log('value: ', value.x);
  })
  .onComplete(function() {
    console.log('complete');
  })
  .start();

const tick = function() {
  update();
  requestAnimationFrame(tick);
};
tick();
```
