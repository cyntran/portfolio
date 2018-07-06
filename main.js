let choo = require('choo')
let html = require('choo/html')

var app = choo()

app.route('/', mainView)
app.mount('body')

function mainView (state, emit) {
  return html`
    <body>
      ${body()}
    </body>
  `
}

function body() {
  return html`
    <div class="main">
      <p>Cynthia Tran</p>
      <div class="nav">
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/projects'>Projects</a>
        <a href='/blog'>Blog</a>
      </div>
      <div class='icons'>
        <a href='https://www.upwork.com/o/profiles/users/_~0156122e36a4061fc7/'>
          <img src="${require('./img/upwork.png')}"/>
        </a>
        <a href='https://www.linkedin.com/in/cynthia-tran-4baa82113/'>
          <i class="fab fa-linkedin" style="color:#4875B4"></i>
        </a>
      </div>
    </div>
    `
  }
