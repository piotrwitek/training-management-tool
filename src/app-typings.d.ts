/// <reference path="../typings/index.d.ts" />

type Todo = {
  uid: number;
  title: string;
  completed: boolean;
}

declare module "mobx" {
  export const observable: any;
  export const autorun: any;
}
