
import { bindable } from 'aurelia-framework';

export class DebugBinding {
	@bindable
	customer = {
		name: 'Smith',
		orders: [
			{
				ammount: 10,
				price: 3.0,
				pricetotal: 30.0,
				id: 121,
				title: 'Fridge Magnet 3000'
			},
			{
				ammount: 20,
				price: 4.0,
				pricetotal: 80.0,
				id: 244,
				title: 'Pot XXL Svenska'
			},
		]
	}
	
	debug = JSON.stringify(this.customer);
}