import Help from "./help";
import Component from "./Component";
const basics = new Component(({ client, prefix, commands }) => {
  client.on("ready", () => {
    console.log("Bot ready!");
    console.log(`Logged in as ${client.user ? client.user.tag : null}!`);
  });
  let help = new Help(commands);
  client.on("messageCreate", async (msg) => {
    if (msg.content.startsWith(prefix)) {
      // const normalArgs = msg.content.slice(2);
      let args = msg.content.slice(prefix.length).trim().split(/ +/);
      if (args.length === 0) args === undefined;
      const command = args.shift();

      if (command === "help") {
        help.command(args, msg);
      }
    }
  });
});
export default basics;
