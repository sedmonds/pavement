var html = require('choo/html')

module.exports = function (state, emit) { 
  emit('DOMTitleChange', 'A to Z Road Inc.' )

  return html`<body class="bg-image">
    <style>
      html, body {
        height: 100%;
      }
      .bg-image {
        background-image: url("/assets/scott-webb-51465-unsplash.jpg");  
        height: 100%;

        /* center/scale */
        background-position: center;
        background-repeat: none;
        background-size: cover;
      }
    </style>
    <div id="main"></div> 
   </body>
  `
}
