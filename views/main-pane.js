const yo = require('yo-yo')
const npcView = require('./npc')
const textView = require('./text')

const routes = {
  npc: npcView,
  textAdd: textView
}

function mainPane (store) {
  const renderInside = (state) => {
    const page = state.app.page
    const view = routes[page]
    if (view) return view(store).render(state)
  }

  const render = (state) => {
    return yo`<div class="pane">
			${renderInside(state)}
    </div>`
  }

  return {
    render
  }
}

module.exports = mainPane
