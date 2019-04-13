var html = require('choo/html')

var TITLE = 'pavement - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="code lh-copy">
   </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
