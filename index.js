import { linear } from './ease.js';
import loop from './loop.js';
import now from './now.js';

export default function tween(base) {
  const api = {};
  const object = base;
  const valuesStart = {};
  const valuesStartRepeat = {};

  let valuesEnd = {};
  let duration = 1000;
  let repeat = 0;
  let delayTime = 0;
  let yoyo;
  let isPlaying;
  let reversed;
  let startTime;
  let easingFunction = linear;
  let onStartCallback;
  let onStartCallbackFired;
  let onUpdateCallback;
  let onCompleteCallback;
  let onStopCallback;

  // Set all starting values present on the target base
  for (const field in base) {
    valuesStart[field] = parseFloat(base[field], 10);
  }

  api.to = function(properties, ms) {
    if (ms) { duration = ms; }
    valuesEnd = properties;
    return api;
  };

  api.start = function(time = now()) {
    loop.add(api);

    isPlaying = true;

    onStartCallbackFired = false;

    startTime = time;
    startTime += delayTime;

    for (const property in valuesEnd) {
      valuesStart[property] = object[property];
      valuesStartRepeat[property] = valuesStart[property] || 0;
    }

    return api;
  };

  api.stop = function() {
    if (!isPlaying) { return api; }

    loop.remove(api);
    isPlaying = false;

    if (onStopCallback) {
      onStopCallback(object);
    }

    return api;
  };

  api.duration = function(ms) {
    duration = ms;
    return api;
  };

  api.delay = function(amount) {
    delayTime = amount;
    return api;
  };

  api.repeat = function(times) {
    repeat = times;
    return api;
  };

  api.yoyo = function(bool) {
    yoyo = bool === undefined ? true : !!bool;
    return api;
  };

  api.ease = function(fn) {
    easingFunction = fn;
    return api;
  };

  api.onStart = function(callback) {
    onStartCallback = callback;
    return api;
  };

  api.onUpdate = function(callback) {
    onUpdateCallback = callback;
    return api;
  };

  api.onComplete = function(callback) {
    onCompleteCallback = callback;
    return api;
  };

  api.onStop = function(callback) {
    onStopCallback = callback;
    return api;
  };

  api.update = function(time) {
    if (time < startTime) { return true; }

    if (!onStartCallbackFired) {
      if (onStartCallback) {
        onStartCallback(object);
      }

      onStartCallbackFired = true;
    }

    let elapsed = (time - startTime) / duration;
    elapsed = elapsed > 1 ? 1 : elapsed;

    const value = easingFunction(elapsed);

    let property;
    for (property in valuesEnd) {
      const start = valuesStart[property] || 0;
      const end = valuesEnd[property];

      object[property] = start + (end - start) * value;
    }

    if (onUpdateCallback) {
      onUpdateCallback(object);
    }

    if (elapsed === 1) {
      if (repeat > 0) {
        if (isFinite(repeat)) { repeat--; }

        // Reassign starting values, restart by making startTime = now
        for (property in valuesStartRepeat) {
          if (yoyo) {
            const tmp = valuesStartRepeat[property];
            valuesStartRepeat[property] = valuesEnd[property];
            valuesEnd[property] = tmp;
          }

          valuesStart[property] = valuesStartRepeat[property];
        }

        if (yoyo) { reversed = !reversed; }
        startTime = time + delayTime;

        return true;
      } else {
        if (onCompleteCallback) {
          onCompleteCallback(object);
        }

        return false;
      }
    }

    return true;
  };

  return api;
};

export * from './ease.js';
export const update = loop.update;