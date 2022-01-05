import env from "dotenv";
import basics from "./basics";
import Bot from "./Bot";
import ping from "./ping";

env.config();

try {
  const bot = new Bot({
    clientId: process.env.TOKEN as string,
    prefix: "t!",
    plugins: {
      commands: [ping],
      plugins: [basics],
    },
  });
} catch (err) {
  console.error(err);
}
