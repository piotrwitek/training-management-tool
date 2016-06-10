export let __hotReload = true;

import * as React from 'react';
import {TrainingStore, TrainingModel} from './training-store';

interface IProps {
  data: TrainingModel;
  onRemove: any;
  isEditMode?: boolean; // TODO
}

export const TrainingItem = (props: IProps) => {
  let trainingData = props.data;
  let handleRemove = () => {
    props.onRemove(trainingData.uid);
  }
  return <div key={trainingData.uid}  className="training-item">
    <div className="training-item__title">
      {trainingData.title}
    </div>
    <hr/>
    <div className="training-item__body">
      {trainingData.description}
    </div>
    <hr/>
    <div className="training-item__footer">
      <ul>
        <li>
          <a onClick="" href="javascript:undefined">Edit</a>
        </li>
        <li>
          <a onClick={handleRemove} href="javascript:undefined">Remove</a>
        </li>
      </ul>
    </div>
  </div>
}
