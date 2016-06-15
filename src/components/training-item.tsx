export let __hotReload = true;

import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  data: TrainingModel;
  onRemove: any;
  onUpdate: any;
}

interface IState {
    uid: number;
    title?: string;
    description?: string;
    isEditMode?: boolean;
}

export class TrainingItem extends React.Component<IProps, {}> {
    state: IState = {
      uid: 0,
      title: '',
      description: '',
      isEditMode: false
    }

    descTextArea: HTMLTextAreaElement;
    titleInput: HTMLInputElement;

    componentWillMount() {
        this.setState(this.props.data);
    }

    componentDidMount() {
        this.resizeTextArea();
    }

    componentDidUpdate() {
        this.resizeTextArea();
    }

    resizeTextArea= ():void => {
        this.descTextArea.style.height = this.descTextArea.scrollHeight + 'px';
    }

    handleEdit = ():void => {
        this.setState({isEditMode: !this.state.isEditMode});
    }

    handleSave = ():void => {
        this.setState({isEditMode: false, title:this.titleInput.value, description: this.descTextArea.value});
        this.props.onUpdate(this.state.uid, this.titleInput.value, this.descTextArea.value);
    }

    handleRemove = ():void => {
        this.props.onRemove(this.state.uid);
    }

    handleCancel = ():void => {
        this.descTextArea.value = this.state.description;
        this.setState({isEditMode: false});
    }

    render() {
      return <div key={this.state.uid}  className="training-item">
        <input ref={(ref) => this.titleInput = ref}
            type='text'
            className={this.state.isEditMode ? "title__text": "title__text title__text--readonly"}
            defaultValue={this.state.title}
            readOnly={!this.state.isEditMode}
        />
        <hr/>
        <textarea ref={(ref) => this.descTextArea = ref}
            className={this.state.isEditMode ? "description__text" : "description__text description__text--readonly"}
            readOnly={!this.state.isEditMode}
            defaultValue={this.state.description}
        />
        <hr/>
        <div className="training-item__footer">
          <ul>
            <li>
                <button className='app__btn btn--hover-green' type='button' onClick={this.state.isEditMode ? this.handleSave : this.handleEdit}>
                    {this.state.isEditMode ? 'Save' : 'Edit'}
                </button>
            </li>
            <li>
                <button className='app__btn btn--hover-red' type='button' onClick={this.state.isEditMode ? this.handleCancel : this.handleRemove}>
                    {this.state.isEditMode ? 'Cancel' : 'Remove'}
                </button>
            </li>
          </ul>
        </div>
      </div>
    }
};
