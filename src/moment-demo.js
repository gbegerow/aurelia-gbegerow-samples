"use strict"
import {bindable,inject, computedFrom} from 'aurelia-framework';

// jspm install moment
import moment from 'moment'; 

export class MomentDemo {
	@bindable birthday=new Date(2000,1,1); // : Date
	
	@computedFrom('birthday')
	get age() {
		if (this.birthday){
			return moment(this.birthday).fromNow();
		}
		return undefined;
	} 
	
}