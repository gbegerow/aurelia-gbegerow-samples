
import {inject} from 'aurelia-framework';

@inject(Element)
export class MarkdownEditor{
	markdownText;
	
	constructor(element) {
		this.element = element;
		this.markdownText ="#Markdown\n##It's cool man";
	}	
}