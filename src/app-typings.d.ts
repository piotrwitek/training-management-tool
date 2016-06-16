/// <reference path="../typings/index.d.ts" />
declare const System: any;

declare module "mobx" {
  export const observable: any;
  export const autorun: any;
}

type Todo = {
  uid: number;
  title: string;
  completed: boolean;
}
