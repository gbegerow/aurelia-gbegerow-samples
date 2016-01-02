import { inject, bindable, computedFrom } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)


export class Welcome {
	@bindable filter = "";
	demos;
	@bindable done = true;
	
// can do computedFrom('router.navigation') but demos seems cleaner
	@computedFrom('demos','filter','done') 
	get filteredDemos() {
		let rx = new RegExp(this.filter, 'i');
		let filtered = this.demos
			.filter((node) => node.title.match(rx)
			|| node.config.tags && node.config.tags.some(t => t.match(rx)));

		if (this.done) {
			filtered = filtered.filter((node) => node.config.done);
		}
		return filtered;
	}

	constructor(Router) {
		this.router = Router;
		this.demos = Router.navigation;
	}

	activate(params, routeConfig, navigationInstruction) {
		if (params.all) {
			this.done = false;
		}
	}

}
