import {TrainingStore, TrainingModel} from '../../src/components/training-store';

const getInitialState = (): TrainingModel[] => ([
  new TrainingModel('fake training 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.')
]);

class AssertHelper {
  runned = 0;
  passed = 0;
  failed = 0;
  assert = (assertion) => {
    this.runned++;
    if (assertion) this.passed++;
    else this.failed++;
  }
}

let trainingStore: TrainingStore;
// test addItem
const addItemAssertHelper = new AssertHelper();
trainingStore = new TrainingStore(getInitialState());
const title = 'new item title';
const description = 'new item description';
addItemAssertHelper.assert(trainingStore.state.length === 3);

trainingStore.addItem(title, description);
addItemAssertHelper.assert(trainingStore.state.length === 4);
let addedItem = trainingStore.state.slice(-1).pop();
addItemAssertHelper.assert(addedItem.title === title);
addItemAssertHelper.assert(addedItem.description === description);
console.log(`TrainingStore.addItem -> ${addItemAssertHelper.passed}/${addItemAssertHelper.runned}`);

// remove item
const removeItemAssertHelper = new AssertHelper();
trainingStore = new TrainingStore(getInitialState());
const firstItem = trainingStore.state.slice(0, 1).pop();
const uid = firstItem.uid;
removeItemAssertHelper.assert(trainingStore.state.length === 3);

trainingStore.removeItem(uid);
removeItemAssertHelper.assert(trainingStore.state.length === 2);
console.log(`TrainingStore.removeItem -> ${removeItemAssertHelper.passed}/${removeItemAssertHelper.runned}`);

export let failed = addItemAssertHelper.failed + removeItemAssertHelper.failed;
export let passed = addItemAssertHelper.passed + removeItemAssertHelper.passed;
