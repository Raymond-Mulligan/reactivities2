import { makeAutoObservable } from "mobx";
import { ServerError } from "../models/ServerError";


export default class commonStore {
  error: ServerError | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setServerError = (error: ServerError) => {
    this.error = error;
  }
}
