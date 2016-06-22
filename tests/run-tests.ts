import {failed as tsf, passed as tsp} from './components/training-store.ts';

// printing results
let allFailed = tsf;
let allPassed = tsp;
console.log('\nTest ' + (allFailed === 0 ? 'passed!' : 'failed!'));
console.log(`Assertions passed: ${allPassed}, failed: ${allFailed}`);
