import $ from 'jquery'
import mustache from 'mustache'
import template from './Header.html'
import './Header.scss'


export default class Header {
  constructor(){
    return this;
  }
  render(node) {
    const text = $(node).text();

    $(node).html(
      mustache.render(template, {text})
    );
  }
}
