var html = require('choo/html')

var TITLE = 'A to Z Road Inc.'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body>
      <main>
        
      </main> 
   </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
