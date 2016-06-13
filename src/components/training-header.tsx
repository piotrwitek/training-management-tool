export let __hotReload = true;

import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  onAdd: (title: string, description: string) => any;
}

interface IState {
  title?: string;
  description?: string;
}

export class TrainingHeader extends React.Component<IProps, IState> {
  state: IState = {
    title: '',
    description: ''
  }

  handleAdd = () => {
    this.props.onAdd(this.state.title, this.state.description);
    this.setState({ title: '', description: '' });
  }

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  render() {
    let buttonDisabled = this.state.title === '' || this.state.description === '';
    return (
      <div className="training-list">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        <label htmlFor="description">Description</label>
        <input id="description" type="text" value={this.state.description} onChange={this.handleChangeDescription} />
        <button type="button" className={'app__button' + (buttonDisabled ? ' app__button__disabled' : '')}
         onClick={this.handleAdd} disabled={buttonDisabled}>Add New</button>
      </div>
    );
  }
};
