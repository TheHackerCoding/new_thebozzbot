import Command from "./Command";
import { meme } from "memejs";
import { HelperEmbed } from "./utils";

const memes = new Command(
  {
    name: "meme",
    description: "gets memes from reddit",
    category: "misc",
    example: "!meme",
  },
  ({ msg }) => {
    meme().then((val) => {
      let embed = HelperEmbed({
        title: val.title,
        image: val.url,
        footer: { text: `u/${val.author} in r/${val.subreddit}` },
      });
      msg.channel.send({
        embeds: [embed]
      })
    }).catch((err) => {
      msg.channel.send("uhhh something bad happened, aka " + err)
    });
  }
);

export default memes
