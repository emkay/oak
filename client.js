const level = require('level')
const yo = require('yo-yo')
const mainView = require('./views/main')
const store = require('./models')
const view = mainView(store)

const db = level(__dirname + '/db')
window.db = db

store.use({
  onStateChange: (data, state, prev, caller, createSend) => {
    yo.update(el, view.render(state))
  }
})

const createSend = store.start()
const send = createSend('dispatcher', true)

db.get('nodes', (err, data) => {
  if (err) console.error(err)

  if (data) {
    const nodes = JSON.parse(data)
    send('nodes:update', nodes)
    console.log(nodes)
  }
})

const el = view.render(store.state())
document.body.appendChild(el)
