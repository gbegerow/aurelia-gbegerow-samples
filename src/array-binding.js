import {bindable, computedFrom, inject, ObserverLocator} from 'aurelia-framework';
import {toNumber} from 'utils';

@inject(ObserverLocator)
export class ArrayBinding {
	@bindable values = [];
	@bindable number=0;
	
	disposeSubscriptions = null;
	constructor(obsLoc){
		for (var i = 0; i < 100; i++) {
			this.values.push(i);			
		}
		
		// computedFrom will only watch the array but not the elements
		// so we will need an additional observer
		var arrayObserver = obsLoc.getArrayObserver(this.values);
		this.disposeSubscriptions = arrayObserver.subscribe((slices)=> {
			console.log("values has changed");
			// trigger array observation (will trigger twice :-) )
			let temp = this.values;
			this.values=[];
			this.values = temp;
		});
	
	}
	
	deactivate(){
		if (this.disposeSubscriptions){ this.disposeSubscriptions(); } // dispose disposeSubscriptions
	}
	
	// computedFrom by itself will only trigger on addition/deletion
	@computedFrom("values")
	get sumOfSquares() {
		let sum = this.values
			.map((x)=> x*x)
			.reduce((x,akku)=>akku +x, 0);
			
		console.log("Sum: "+ sum);
		return sum;	 
	}
	
	@computedFrom("number", "values")
	get occurences() {
		let num = toNumber(this.number);
		let indices = this.values.reduce((akku, x, index )=>{
			if (x === num) {
				if (akku && akku.length) { 
					return akku + ", " + index;
				} else {
					return index.toString();
				}
			}
			return akku;
		});
		
		return indices;
	}
		
	incAll() {
		// observation will occur once afterwards 
		for (var i = 0; i < this.values.length; i++) {
			this.values[i]++;
		}	
	}
	
	pushNumber(number) {
		this.values.push(toNumber(number));
	}
	
	remNumber(number) {
		let index=0;
		let num = toNumber(number);
		
		while ( (  index = this.values.indexOf(num)) !== -1){
			this.values.splice(index, 1);		
		}
	}

}