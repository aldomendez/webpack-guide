import './styles.scss'

if (document.querySelectorAll('a').length) {
  require.ensure([], ()=>{
    const Button = require('./Components/Button').default
    const button = new Button('google.com')

    button.render('a')
  },'button')
}


if (document.querySelectorAll('h1').length) {
  require.ensure([], ()=>{
    console.log('Header')
    const Header = require('./Components/Header').default
    console.log((Header))
    new Header().render('h1');
  },'Header')
}