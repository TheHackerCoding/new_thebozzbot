import { EmbedField, Message } from "discord.js";
import Command from "./Command";
import {HelperEmbed} from "./utils";

type OrganizedCommands = Map<string, Command[]>;

export default class ParticalHelp {
  public commands: Command[];
  public organized: OrganizedCommands;

  constructor(commands: Command[]) {
    this.commands = commands;
    this.organized = new Map();
    this.commands.forEach((x) => {
      let set = this.organized.has(x.category);
      if (set) {
        let old = this.organized.get(x.category);
        let _new = old?.concat(x);
        this.organized.set(x.category, _new as Command[]);
      } else {
        this.organized.set(x.category, [x]);
      }
    });
  }

  command(args: string[], msg: Message) {
    if (args.length !== 0) {
      return
    } else {
      this.general(msg);
    }
  }

  general(msg: Message) {
    let data: EmbedField[] = [];
    this.organized.forEach((v, k) => {
      data.push({
        name: k,
        value: this.commandNames(v),
        inline: false,
      });
    });
    let embed = HelperEmbed({
      fields: data
    });
    msg.channel.send({
      embeds: [embed]
    })
  }
  
  specific()

  commandNames(x: Command[]) {
    function structure(y: string[]) {
      y.forEach((u: string) => {
        let original = u;
        u = "`" + u + "`";
        let f = y.indexOf(original);
        y[f] = u;
      });
      return y.join(", ");
    }

    let data: string[] = [];
    x.forEach((x) => {
      data.push(x.name);
    });
    return structure(data)

  }
}
