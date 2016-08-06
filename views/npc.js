const yo = require('yo-yo')
const observ = require('observ')

function npcView (store) {
  const createSend = store.start()
  const send = createSend('dispatcher', true)

  const name = observ('')
  const added = observ(false)

  const onsubmit = (e) => {
    return false
  }

  const save = (e) => {
    if (!added()) {
      added.set(true)
      send('npc:add', {
        name: name()
      })
    } else {
      send('npc:update', {

      })
    }
  }

  const oninput = (e) => {
    name.set(e.target.value)
  }

  const render = (state) => {
    return yo`<section style="padding: 20px"><form onsubmit=${onsubmit}>
            <div class="form-group">
              <label>Name</label>
              <input oninput=${oninput} class="form-control" placeholder="Name">
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-form btn-default">Cancel</button>
              <button type="submit" onclick=${save} class="btn btn-form btn-primary">Save</button>
            </div>
          </form></section>
          `
  }

  return {
    render
  }
}

module.exports = npcView
