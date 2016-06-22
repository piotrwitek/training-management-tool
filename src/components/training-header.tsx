import * as React from 'react';
import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  onAdd: (title: string, description: string) => any;
}

interface IState {
}

@observer
export class TrainingHeader extends React.Component<IProps, IState> {
  @observable title: string = '';
  @observable description: string = '';
  @observable modalIsActive: boolean = false;
  @computed get addButtonIsDisabled() {
    return this.title === '' || this.description === '';
  };

  handleAdd = () => {
    this.props.onAdd(this.title, this.description);
    this.toggleModal();
  }

  handleChangeTitle = (event) => {
    this.title = event.target.value;
  }

  handleChangeDescription = (event) => {
    this.description = event.target.value;
  }

  toggleModal = () => {
    this.modalIsActive = !this.modalIsActive;
    this.resetForm();
  }

  resetForm = () => {
    this.title = this.description = '';
  }

  render() {
    let modalIsActiveClass = this.modalIsActive ? ' is-active' : '';

    return (
      <div className="">
        <p className="control">
          <button type="button" className="button is-primary is-large is-fullwidth"
            onClick={this.toggleModal}>Add New</button>
        </p>

        <div className={'modal' + modalIsActiveClass}>
          <div className="modal-background" onClick={this.toggleModal}></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Modal title</p>
            </header>
            <section className="modal-card-body">
              <p className="control">
                <label htmlFor="title" className="label">Title</label>
                <input id="title" className="input" type="text"
                  value={this.title} onChange={this.handleChangeTitle} />
              </p>
              <p className="control">
                <label htmlFor="description" className="label">Description</label>
                <textarea id="description" className="textarea"
                  value={this.description} onChange={this.handleChangeDescription}></textarea>
              </p>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-primary"
                onClick={this.handleAdd} disabled={this.addButtonIsDisabled}>Add New</button>
              <button className="button is-link" onClick={this.toggleModal}>Cancel</button>
            </footer>
          </div>
          <button className="modal-close"></button>
        </div>
      </div>
    );
  }
};
