export let __hotReload = true;

// style imports
import './app.css!';
// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// components imports
import {TrainingList} from './components/training-list';
import {TrainingStore} from './components/training-store';
import {TrainingHeader} from './components/training-header';

interface IState {
  trainingStore: TrainingStore;
}

export class App extends React.Component<{}, {}> {
  state: IState = {
    trainingStore: new TrainingStore()
  }

  handleAdd = (title: string, description: string) => {
    this.state.trainingStore.addItem(title, description);
    this.forceUpdate();
  }

  handleRemove = (uid) => {
    this.state.trainingStore.removeItem(uid);
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <TrainingHeader onAdd={this.handleAdd} />
        <TrainingList store={this.state.trainingStore} onRemove={this.handleRemove} />
      </div>
    )
  }
}


export let app: any = ReactDOM.render(<App />, document.getElementById('app-container'));
