import {TrainingStore, TrainingModel} from '../../src/components/training-store';

const initialState: TrainingModel[] = [
  new TrainingModel('fake training 1', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 2', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.'),
  new TrainingModel('fake training 3', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.')
];
const trainingStore = new TrainingStore(initialState);
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


// test addItem
const addItemAssertHelper = new AssertHelper();
const title = 'new item title';
const description = 'new item description';
trainingStore.addItem(title, description);
addItemAssertHelper.assert(trainingStore.state.length === 4);
let newItem = trainingStore.state.slice(-1).pop();
addItemAssertHelper.assert(newItem.title === title);
addItemAssertHelper.assert(newItem.description === description);
console.log(`TrainingStore.addItem -> ${addItemAssertHelper.passed}/${addItemAssertHelper.runned}`);

export let failed = addItemAssertHelper.failed;
export let passed = addItemAssertHelper.passed;
