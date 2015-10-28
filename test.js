var tween = require('./index');

tween({ x: 0 })
    .to({ x: 100 })
    .yoyo()
    .repeat(2)
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


setInterval(function() {
    tween.update();
}, 16);