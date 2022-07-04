import { User } from "discord.js";

const ban = new action(
  "BAN",
  [User, String, Number],
  false,
  true,
  false,
  (user, reason, time, interaction) => {
    time = time || -1;
    reason = reason || "No reason specified";
    interaction.guild.fetch(user).ban({ reason: reason, days: 7 });
  }
);
