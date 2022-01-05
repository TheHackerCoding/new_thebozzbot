import Command from "./Command";

const ping = new Command(
  {
    name: "ping",
    description: "the usual ping pong",
    category: "random"
  },
  ({msg}) => {
    msg.reply("pong")
  }
);

export default ping
