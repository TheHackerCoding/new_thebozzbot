import { CommandCallback } from "./types";

export interface CommandConfig {
  name: string;
  description: string;
  category: string
}

export default class Command {
  public name: string;
  public description: string;
  public category: string
  public fn: CommandCallback;

  constructor(config: CommandConfig, fn: CommandCallback) {
    this.name = config.name;
    this.description = config.description;
    this.category = config.category
    this.fn = fn;
  }
} 
