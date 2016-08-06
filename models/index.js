const barracks = require('barracks')
const store = barracks()
require('./app')(store)
require('./npc')(store)
require('./nodes')(store)
module.exports = store
