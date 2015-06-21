import { customAttribute, inject } from 'aurelia-framework';
import showdown from 'showdown';
import prism from 'prism';

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
    // prism.highlightAll();
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
