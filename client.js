const yo = require('yo-yo')
const barracks = require('barracks')

const store = barracks()

store.use({
  onStateChange: (data, state, prev, caller, createSend) => {
    yo.update(el, mainView(state));
  }
})

store.model({
  state: { title: 'Not quite set yet' },
  reducers: {
    update: (data, state) => ({ title: data })
  }
})

const createSend = store.start()
const send = createSend('dispatcher', true)

const oninput = (e) => {
  send('update', e.target.value)
}

const mainView = (state) => {
  return yo`
  <main>
    <h1>Title: ${state.title}</h1>
    <input
      type="text"
      oninput=${oninput}>
  </main>
  `
}

const el = mainView(store.state())

document.body.appendChild(el)
