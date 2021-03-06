const debug = require('debug');
const client = require('../core/client');

const log = debug('Blacklist');

const BLACKLIST = [];


function blacklist() {
  log('Checking blacklist');
  client.guilds.array().forEach(guild => {
    if (BLACKLIST.includes(guild.id)) {
      guild.leave().then(() => log(`Leaving ${guild.name}`));
    }
  });
}


client.on('guildCreate', blacklist);
client.on('ready', blacklist);
