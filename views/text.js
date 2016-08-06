const yo = require('yo-yo')
const uuid = require('uuid')
const observ = require('observ')

function textView (store) {
  const createSend = store.start()
  const send = createSend('dispatcher', true)
  const text = observ('')

  const id = store.state().app.currentId || uuid.v1()

  const onsubmit = (e) => {
    return false
  }

  const save = (e) => {
    const nodes = store.state().nodes
    nodes[id] = {type: 'text', text: text()}
    send('app:update', {currentId: id})
    send('nodes:update', nodes)
    send('nodes:sync', nodes)
  }

  const oninput = (e) => {
    text.set(e.target.value)
  }

  const renderForm = (el) => (yo`<form onsubmit=${onsubmit}>${el}</form>`)
  const renderFormGroup = (el) => (yo`<div class="form-group">${el}</div>`)

  const render = (state) => {
    const idEl = yo`<div>
      <label>ID</label>
      <input readonly="readonly" class="form-control" placeholder=${id}>
    </div>
    `

    const textEl = yo`<div>
      <label>Text</label>
      <textarea oninput=${oninput} class="form-control" placeholder="Text">
    </div>
    `

    const buttons = yo`
    <div class="form-actions">
    <button type="submit" class="btn btn-form btn-default">Cancel</button>
    <button type="submit" onclick=${save} class="btn btn-form btn-primary">Save</button>
    </div>
    `
    const groupEl = yo`<div>
    ${renderFormGroup(idEl)}
    ${renderFormGroup(textEl)}
    ${buttons}
    </div>
    `
    const formEl = renderForm(groupEl)

    return yo`<section style="padding: 20px;">
    ${formEl}
    </section>
    `
  }

  return {
    render
  }
}

module.exports = textView
