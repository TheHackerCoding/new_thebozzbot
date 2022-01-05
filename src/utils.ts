import {MessageEmbed} from "discord.js";

const HelperEmbed = (data: Partial<MessageEmbed>) => {
  let defaults: Partial<MessageEmbed> = {
    hexColor: '#262626',
    footer: {
      text: "TheBozzBot"
    }
  }

  return new MessageEmbed({...defaults, ...data} as MessageEmbed)
}

export {
  HelperEmbed
}
