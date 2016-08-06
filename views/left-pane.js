const yo = require('yo-yo')

function leftPane (store) {
  const createSend = store.start()
  const send = createSend('dispatcher', true)

  const textOnClick = (e) => {
    send('app:update', {page: 'textAdd'})
  }

  const choiceOnClick = (e) => {
    send('app:update', {page: 'choiceAdd'})
  }

  const branchOnClick = (e) => {
    send('app:update', {page: 'branchAdd'})
  }

  const setOnClick = (e) => {
    send('app:update', {page: 'setAdd'})
  }

  const npcOnClick = (e) => {
    send('app:update', {page: 'npcAdd'})
  }

  const render = (state) => {
    return yo`
      <div class="pane-sm sidebar">
        <nav class="nav-group">
          <h5 class="nav-group-title">Dialog</h5>
          <a onclick=${textOnClick} class="nav-group-item">
            <span class="icon icon-pencil"></span>
            Text
          </a>
          <a onclick=${choiceOnClick} class="nav-group-item">
            <span class="icon icon-help"></span>
            Choice
          </a>
          <a onclick=${branchOnClick} class="nav-group-item">
            <span class="icon icon-flow-branch"></span>
            Branch
          </a>
          <a onclick=${setOnClick} class="nav-group-item">
            <span class="icon icon-target"></span>
            Set
          </a>

          <h5 class="nav-group-title">NPC</h5>
          <a onclick=${npcOnClick} class="nav-group-item">
            <span class="icon icon-plus"></span>
            Add
          </a>
        </nav>
      </div>
    `
  }

  return {
    render
  }
}

module.exports = leftPane
