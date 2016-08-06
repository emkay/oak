const yo = require('yo-yo')

function button (text = '', onclick = () => {}) {
  return yo`<button onclick=${onclick}>${text}</button>`
}

module.exports = button
