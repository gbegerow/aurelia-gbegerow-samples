"use strict"
import { customAttribute, inject } from 'aurelia-framework';

// jspm install showdown=github:showdownjs/showdown
import showdown from 'showdown';

// customized prism.js, so can't be installed via jspm
import prism from '/prism/prism';
import "/prism/prism.css!"

@customAttribute('markdown-component')
@inject(Element)
export class MarkdownComponent {
  constructor(element) {

    this.element = element;
    
    // An instance of the converter
    this.converter = new showdown.Converter();
  }

  valueChanged(newValue) {
    // convert markdown to html
    this.element.innerHTML = this.converter.makeHtml(
      newValue.split('\n').map((line) => line.trim()).join('\n')
      );
    
    // syntax highlighting
    // prism.highlightAll( this.element.querySelectorAll('code') );
    var elements = this.element.querySelectorAll('code');

    for (var i = 0, element; element = elements[i++];) {
      if (element.className === 'javascript'
        ||element.className === 'js'
        ||element.className === '') {
        element.className = "language-javascript";
      }
      prism.highlightElement(element);
    }

  }
}
