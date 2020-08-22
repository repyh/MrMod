const {MessageEmbed, MessageAttachment} = require('discord.js')
const Canvas = require('canvas');
const fs = require('fs')
const db = require('quick.db')
module.exports = {
  name: 'unlock-server',
  description: "Shows info about all command",
  category: "info",
  run: async (bot, message, args) => {
    message.guild.channels.cache.forEach(channel => {
      channel.overwritePermissions[{id: message.guild.roles.everyone.id, allow: ['SEND_MESSAGES']}]
    })
  }
}