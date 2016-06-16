import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  onAdd: (title: string, description: string) => any;
}

interface IState {
  title?: string;
  description?: string;
  modalActive?: boolean;
}

export class TrainingHeader extends React.Component<IProps, IState> {
  state: IState = {
    title: '',
    description: '',
    modalActive: false
  }

  handleAdd = () => {
    this.props.onAdd(this.state.title, this.state.description);
    this.setState({ title: '', description: '' });
    this.toggleModal();
  }

  handleChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleChangeDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  toggleModal = () => {
    this.setState({ modalActive: !this.state.modalActive });
  }

  render() {
    let buttonDisabled = this.state.title === '' || this.state.description === '';
    return (
      <div className="training-list">
        <button type="button" className={'button is-primary'}
          onClick={this.toggleModal}>Add New</button>
        <div className={"modal" + (this.state.modalActive ? " is-active" : "")}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
              <button className="delete" onClick={this.toggleModal}></button>
            </header>
            <section className="modal-card-body">
              <p className="control">
                <label htmlFor="title" className="label">Title</label>
                <input id="title" className="input" type="text" value={this.state.title} onChange={this.handleChangeTitle} />
              </p>
              <p className="control">
                <label htmlFor="description" className="label">Description</label>
                <textarea id="description" className="textarea" type="text" value={this.state.description} onChange={this.handleChangeDescription}></textarea>
              </p>
              <p className="control is-clearfix">

              </p>
            </section>
            <footer className="modal-card-foot">
              <button type="button" className={'button is-primary is-pulled-right' + (buttonDisabled ? ' is-disabled' : '') }
                onClick={this.handleAdd} disabled={buttonDisabled}>Add New</button>
              <a className="button" onClick={this.toggleModal}>Cancel</a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
};
