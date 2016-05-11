

// style imports
import './app.css!';

// lib imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// components imports
import {TodoList} from './components/todo-list';

const mock: Todo[] = [
  {
    uid: 1,
    title: 'item 1',
    completed: true
  }, {
    uid: 2,
    title: 'item 2',
    completed: true
  }, {
    uid: 3,
    title: 'item 3',
    completed: false
  }, {
    uid: 4,
    title: 'item 4',
    completed: false
  }
];


export var app: any = ReactDOM.render(<TodoList todos={mock} />, document.getElementById('app-container'));
