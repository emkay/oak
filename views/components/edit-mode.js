const yo = require('yo-yo')

function editModeView (store) {
  const createSend = store.start()
  const send = createSend('dispatcher', true)

  const oninput = (e) => {
    send('characters:update', e.target.value)
  }

  const render = () => {
    return yo`
      <section>
      <h1>Add Character</h1>
      <label>Name:<input oninput=${oninput}></label>
      </section>
    `
  }

  return {
    render: render
  }
}

module.exports = editModeView
