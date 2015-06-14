import {inject, bindable,computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)


export class Welcome {
	@bindable 
	filter = "";
	demos;
	
	// can do computedFrom('router.navigation')
	@computedFrom('demos','filter') 
	get filteredDemos() {
		let rx = new RegExp(this.filter,'i');
		return this.demos
			.filter((node) => node.title.match(rx) 
				|| node.config.tags && node.config.tags.some(t => t.match(rx)));
	}
	
	constructor(Router){
		this.router = Router;
		this.demos = Router.navigation;
	}
	
	
}


export class StringifyValueConverter {
  toView(value){
    return JSON.stringify(value);
  }
}
