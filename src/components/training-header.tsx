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
      <div>
        <p>
          <label htmlFor="title" className="label">Title</label>
          <input id="title" className="input" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
        </p>
        <p className="control">
          <label htmlFor="description" className="label">Description</label>
          <textarea id="description" className="textarea" type="text" value={this.state.description} onChange={this.handleChangeDescription}></textarea>
        </p>
        <p className="control is-clearfix">
          <button type="button" className={'button is-primary is-pulled-right' + (buttonDisabled ? ' is-disabled' : '') }
            onClick={this.handleAdd} disabled={buttonDisabled}>Add New</button>
        </p>
      </div>
    );
  }
};
