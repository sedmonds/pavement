var html = require('choo/html')

module.exports = function (state, emit) { 
  emit('DOMTitleChange', 'A to Z Road Inc.' )

  return html`
    <body>
      <main>
        
      </main> 
   </body>
  `
}
