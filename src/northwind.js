import {noView} from 'aurelia-framework';
import {Redirect} from 'aurelia-router';

@noView
export class Northwind {
	
	activate() {
		window.open('http://jdanyow.github.io/aurelia-breeze-northwind/',"_blank");
		return new Redirect("welcome");
	}
}