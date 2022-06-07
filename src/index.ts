import env from "dotenv";
import basics from "./basics";
import Bot from "./Bot";
import memes from "./memes";
import ping from "./ping";

env.config();

try {
  new Bot({
    clientId: process.env.TOKEN as string,
    prefix: "t!",
    plugins: {
      commands: [ping, memes],
      components: [basics],
    },
  });
} catch (err) {
  console.error(err);
}
