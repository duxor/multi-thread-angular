// <reference lib="webworker" />

import {calculateSum} from '../utils/calculate-sum';

const webWorker: Worker = self as any;

webWorker.addEventListener('message', ({data}) => {
  webWorker.postMessage(calculateSum(data));
});
