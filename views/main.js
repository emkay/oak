const yo = require('yo-yo')
const mainPane = require('./main-pane')
const leftPane = require('./left-pane')

function mainView (store) {
  const render = (state) => {
    return yo`<div class="window">
      <header class="toolbar toolbar-header">
        <input style="margin:10px; width: 40%;" class="form-control" type="text" placeholder="Search">
      </header>
      <div class="window-content">
        <div class="pane-group">
          ${leftPane(store).render(state)}
          ${mainPane(store).render(state)}
        </div>
      </div>
      <footer class="toolbar toolbar-footer">
        <h1 class="title">Footer</h1>
      </footer>
    </div>`
  }

  return {
    render
  }
}

module.exports = mainView
