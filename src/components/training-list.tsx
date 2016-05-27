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
      <div>
        <ul>
          { trainings.map((trainingModel) =>
            <TrainingItem key={trainingModel.uid} data={trainingModel} onRemove={this.props.onRemove} />) }
        </ul>
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
  return <li key={training.uid} className={''}>
    {training.title} - <a onClick={handleRemove} href="javascript:undefined">(Remove)</a
    ></li>
}
