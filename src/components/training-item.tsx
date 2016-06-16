export let __hotReload = true;

import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  data: TrainingModel;
  onRemove: any;
  onEdit: any;
}

interface IState {
  isEditMode?: boolean;
}

export class TrainingItem extends React.Component<IProps, {}> {
  state: IState = {
    isEditMode: false
  }

  descTextArea: HTMLTextAreaElement;
  refDescTextArea = (ref) => this.descTextArea = ref;
  titleInput: HTMLInputElement;
  refTitleInput = (ref) => this.titleInput = ref;

  handleRemove = (): void => {
    this.props.onRemove(this.props.data.uid);
  }

  handleEdit = (): void => {
    this.setState({ isEditMode: !this.state.isEditMode });
  }

  handleSave = (): void => {
    this.props.onEdit(this.props.data.uid, this.titleInput.value, this.descTextArea.value);
    this.setState({ isEditMode: false });
  }

  handleCancel = (): void => {
    this.titleInput.value = this.props.data.title;
    this.descTextArea.value = this.props.data.description;
    this.setState({ isEditMode: false });
  }

  render() {
    return <div key={this.props.data.uid}  className="column is-mobile is-half-tablet is-one-third-desktop">
    <div className="card">
    <header className="card-header">
      <input ref={this.refTitleInput}
        type='text'
        className={this.state.isEditMode ? "input title__text card-header-title" : "input title__text title__text--readonly card-header-title" }
        defaultValue={this.props.data.title}
        readOnly={!this.state.isEditMode}
        />
    </header>
      <div className="card-content">
      <textarea ref={this.refDescTextArea}
        className={this.state.isEditMode ? "textarea description__text" : "textarea description__text description__text--readonly"}
        defaultValue={this.props.data.description}
        readOnly={!this.state.isEditMode}
        />
      </div>
      <div className="card-footer">
            <a className='card-footer-item is-success'  onClick={this.state.isEditMode ? this.handleSave : this.handleEdit}>
              {this.state.isEditMode ? 'Save' : 'Edit'}
            </a>
            <a className='card-footer-item is-danger' onClick={this.state.isEditMode ? this.handleCancel : this.handleRemove}>
              {this.state.isEditMode ? 'Cancel' : 'Remove'}
            </a>
      </div>
      </div>
    </div>
  }
};
