// console.log('starting calculation');
// const fibonacci = (num) => {
//   if (num <= 1) return 1;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// };
// console.log(`Just for fun: ${fibonacci(41)}`);
// console.log('finished calculation');

console.log('starting calculation');
if (window.Worker) {
  const myWorker = new Worker('worker.js');
  myWorker.postMessage(42);
  console.log('Sent request to worker');
  myWorker.onmessage = (e) => {
    console.log('Result', e.data);
  };
}
console.log('finished calculation');
