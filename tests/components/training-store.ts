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

// prepare
const addItemAssertHelper = new AssertHelper();
trainingStore = new TrainingStore(getInitialState());
addItemAssertHelper.assert(trainingStore.state.length === 3);
// addItem
const title = 'new item title';
const description = 'new item description';
trainingStore.addItem(title, description);
// assert
addItemAssertHelper.assert(trainingStore.state.length === 4);
let addedItem = trainingStore.state.slice(-1).pop();
addItemAssertHelper.assert(addedItem.title === title);
addItemAssertHelper.assert(addedItem.description === description);
console.log(`TrainingStore.addItem -> ${addItemAssertHelper.passed}/${addItemAssertHelper.runned}`);

// prepare
const removeItemAssertHelper = new AssertHelper();
trainingStore = new TrainingStore(getInitialState());
removeItemAssertHelper.assert(trainingStore.state.length === 3);
// removeItem
const removedItem = trainingStore.state.slice(0, 1).pop();
trainingStore.removeItem(removedItem.uid);
// assert
removeItemAssertHelper.assert(trainingStore.state.length === 2);
console.log(`TrainingStore.removeItem -> ${removeItemAssertHelper.passed}/${removeItemAssertHelper.runned}`);

// prepare
const editItemAssertHelper = new AssertHelper();
trainingStore = new TrainingStore(getInitialState());
editItemAssertHelper.assert(trainingStore.state.length === 3);
const preEditedItem = trainingStore.state.slice(0, 1).pop();
// editItem
const newTitle = 'new item title';
const newDescription = 'new item description';
trainingStore.editItem(preEditedItem.uid, newTitle, newDescription);
// assert
const editedItem = trainingStore.state.slice(0, 1).pop();
editItemAssertHelper.assert(trainingStore.state.length === 3);
editItemAssertHelper.assert(editedItem.uid === preEditedItem.uid);
editItemAssertHelper.assert(editedItem.title === newTitle);
editItemAssertHelper.assert(editedItem.description === newDescription);
console.log(`TrainingStore.editItem -> ${editItemAssertHelper.passed}/${editItemAssertHelper.runned}`);


export let failed = addItemAssertHelper.failed + removeItemAssertHelper.failed + editItemAssertHelper.failed;
export let passed = addItemAssertHelper.passed + removeItemAssertHelper.passed + editItemAssertHelper.passed;
