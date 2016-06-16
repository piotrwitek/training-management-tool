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
    return <div key={this.props.data.uid}  className="training-item">
      <input ref={this.refTitleInput}
        type='text'
        className={this.state.isEditMode ? "input title__text" : "input title__text title__text--readonly"}
        defaultValue={this.props.data.title}
        readOnly={!this.state.isEditMode}
        />
      <hr/>
      <textarea ref={this.refDescTextArea}
        className={this.state.isEditMode ? "textarea description__text" : "textarea description__text description__text--readonly"}
        defaultValue={this.props.data.description}
        readOnly={!this.state.isEditMode}
        />
      <hr/>
      <div className="training-item__footer">
        <ul>
          <li>
            <button className='button is-success' type='button' onClick={this.state.isEditMode ? this.handleSave : this.handleEdit}>
              {this.state.isEditMode ? 'Save' : 'Edit'}
            </button>
          </li>
          <li>
            <button className='button is-danger' type='button' onClick={this.state.isEditMode ? this.handleCancel : this.handleRemove}>
              {this.state.isEditMode ? 'Cancel' : 'Remove'}
            </button>
          </li>
        </ul>
      </div>
    </div>
  }
};
