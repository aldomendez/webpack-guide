import $ from 'jquery'
import mustache from 'mustache'


export default class Header {
  constructor(){
    return this;
  }
  render(node) {
    const text = $(node).text();

    $(node).html(mustache.render(template, {text}));
  }
}
