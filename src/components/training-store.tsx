export class TrainingStore {
  constructor(initialState: TrainingModel[]) {
    this.state = initialState;
  }
  state: TrainingModel[];

  addItem = (title: string, description: string) => {
    let newItem = new TrainingModel(title, description);

    this.state.push(newItem);
  }

  editItem = (uid: number, title: string, description: string) => {
    let existingItem = this.state.find(item => item.uid === uid);
    if (existingItem == null) return;

    existingItem.title = title;
    existingItem.description = description;
  }

  removeItem = (uid: number) => {
    let newState = this.state.filter((item) => item.uid !== uid);

    this.state = newState;
  }
}

let uidIterator = 0;

export class TrainingModel {
  uid: number = uidIterator++;
  title: string;
  description: string;
  constructor(title: string, description: string) {
    this.title = title;
    this.description = description;
  }
}
