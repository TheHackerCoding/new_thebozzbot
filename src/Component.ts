import {ComponentCallback} from "./types";

export default class {
  public fn: ComponentCallback;

  constructor(fn: ComponentCallback) {
    this.fn = fn
  }
}
