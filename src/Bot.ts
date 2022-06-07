import { Client, Intents } from "discord.js";
import Command from "./Command";
import Component from "./Component"

interface BotPlugins {
  commands: Command[];
  components: Component[];
}

interface BotConfig {
  clientId: string;
  plugins: BotPlugins;
  prefix: string;
}

export default class Bot {
  public client: Client;
  public commands: Command[];
  public components: Component[];
  public prefix: string;

  constructor(config: BotConfig) {
    this.client = new Client({
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
      ],
    });
    let client = this.client;
    let { plugins, clientId, prefix } = config;
    this.commands = plugins.commands;
    this.components = plugins.components;
    this.prefix = prefix;

    client.on("messageCreate", async (msg) => {
      if (msg.author.bot) return;
      if (!msg.guild) return;

      if (msg.content.startsWith(prefix)) {
        // const normalArgs = msg.content.slice(2);
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift();

        const exec = (x: Command) => {
          return x.fn({
            args,
            msg,
          });
        };

        let found = this.commands.find((ele) => ele.name === command);
        if (found) {
          exec(found);
        } else if (command === "help") {
          return;
        } else {
          msg.reply("No command found with that name");
        }
      }
    });
    client.login(clientId);
    if (this.components) {
      this.components.forEach((p) => {
        p.fn(this);
      });
    }
  }
}
