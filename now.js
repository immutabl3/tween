const nodeNow = function() {
  // eslint-disable-next-line
  // @ts-ignore
  const time = process.hrtime();

  // Convert [seconds, nanoseconds] to milliseconds.
  return time[0] * 1000 + time[1] / 1000000;
};

const performanceNow = () => globalThis.performance.now();

export default globalThis.process?.hrtime
  ? nodeNow
  : globalThis.performance?.now
    ? performanceNow
    : Date.now;