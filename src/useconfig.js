
import {inject} from 'aurelia-framework';
import {Configuration} from 'configuration';

@inject(Configuration)

export class UseConfig {
	config;
	keyvalues=[];
	
	constructor(configuration){
		//debugger;
		this.config = configuration;
		
		// todo: for of + deconstruction
		// for (let i of config){
		// 	let (key,value) = i;
		// 	this.keyvalues.push({key,value});
		// }	
	}
}