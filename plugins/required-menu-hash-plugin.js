const crypto = require('crypto');
const {NewsRequiredSubMenu, MeterialRequiredMenu} = require('../src/_names');
let hashs = {
  news: {},
  meterial: {}
}

function generateHash(_hashs, name){
  const hash = crypto.createHash('sha256');
  hash.update(name);
  _hashs[name] = hash.digest('hex');
  return _hashs;
}

NewsRequiredSubMenu.reduce(generateHash, hashs.news);
MeterialRequiredMenu.reduce(generateHash, hashs.meterial);

module.exports = hashs;
