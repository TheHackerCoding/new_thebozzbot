import {PluginCallback} from "./types";

export default class Plugin {
  public fn: PluginCallback;

  constructor(fn: PluginCallback) {
    this.fn = fn
  }
}
