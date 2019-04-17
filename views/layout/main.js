var html = require('choo/html')

module.exports = function (content) {
  return html`<body>
    <link rel="stylesheet" href="/style.css" />
    <div class="page">
      <div class="header">Header
        <img src="/assets/logo_black.png" alt="Logo" />
      </div>
      <div class="navigation"></div>
      <div class="content">${content}</div>
      <div class="footer">footer</div>
    </div>
  </body>`  
}
