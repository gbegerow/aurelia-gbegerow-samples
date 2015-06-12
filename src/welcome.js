import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)


export class Welcome {
	
	constructor(Router){
		this.router = Router;
	}
}


export class StringifyValueConverter {
  toView(value){
    return JSON.stringify(value);
  }
}
