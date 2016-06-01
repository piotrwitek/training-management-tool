export let __hotReload = true;

import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  store: TrainingStore;
  onRemove: any;
}

export class TrainingList extends React.Component<IProps, {}> {
  render() {
    let trainings = this.props.store.state;
    return (
      <div className="wrapper">
        <div className="masonry">
          { trainings.map((trainingModel) =>
            <TrainingItem key={trainingModel.uid} data={trainingModel} onRemove={this.props.onRemove} />) }
        </div>
      </div>
    );

  }
};
type TrainingItemProps = {
  data: TrainingModel;
  onRemove: any;
}
const TrainingItem = (props: TrainingItemProps) => {
  let training = props.data;
  let handleRemove = () => {
    props.onRemove(training.uid);
  }
  return <div key={training.uid}  className="item">
    <div className="item-title">{training.title}</div>
    <hr/>
    <div className="item-body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem dolor eveniet expedita labore laboriosam, molestias mollitia,
    </div>
    <hr/>
    <div className="item-footer">
      <ul>
        <li><a onClick={handleRemove} href="javascript:undefined" >Remove</a></li>
        <li><a onClick="" href="javascript:undefined" >Edit</a></li>
      </ul>
    </div>
    </div>
}
