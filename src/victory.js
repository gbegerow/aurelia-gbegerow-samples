import {bindable, computedFrom} from 'aurelia-framework';


export class victory{
	total;
	
	activate(params) {
		this.total = params.total;
	}
}