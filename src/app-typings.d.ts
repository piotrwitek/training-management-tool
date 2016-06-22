/// <reference path="../typings/index.d.ts" />
declare const System: any;

declare module 'mobx' {
  export const observable: any;
  export const computed: any;
  export const autorun: any;
}
declare module 'mobx-react' {
  export const observer: any;
}

type Todo = {
  uid: number;
  title: string;
  completed: boolean;
}
