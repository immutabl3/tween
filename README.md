# micro-tween

A trimmed down, commonjs version of [sole's tween.js](https://github.com/tweenjs/tween.js/)

`npm i micro-tween`

### notable changes

Easing functions are located in `micro-tween/ease` to be required in to save on file size. Polyfills for `window.performance.now` have been removed in favor of `Date.now`.

Additional removals:
* no interpolation
* no string relative values
* no safety checks
* no `this` context in functions, use passed object
* no constructor function
* no `getAll`/`removeAll` tweens

Everything else should work!

### Example
```js
var tween = require('micro-tween');
var elasticInOut = require('micro-tween/ease/elasticInOut');

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

var tick = function() {
  tween.update();
  requestAnimationFrame(tick);
}
```
