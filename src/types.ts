import { Message } from "discord.js";
import Bot from "./Bot";

export interface CommandCallbackParams {
  args?: string[];
  msg: Message;
}

export type CommandCallback = (params: CommandCallbackParams) => void;

export type ComponentCallbackParams = Bot;

export type ComponentCallback = (params: ComponentCallbackParams) => void;
