
import {bindable, computedFrom} from 'aurelia-framework';

export class Crud {

	repository;
	
	order;
	selectedPosition;
	
	
	changesAllowed=true;
	
	constructor (){
		this.selectedPosition = new Position(true);
		
		this.repository = new OrderRepository("orders");
		}
	
	activate(params, routerConfig) {
		if (params.id) {
			return this.repository.load(params.id)
				.then((data) => this.order = data);
		} else {
			this.order = new Order();
		}
	}
	
	savePosition() {
		let pos = this.selectedPosition;
		pos.isSelected = false;

		// editing existing position?
		if (this.selectedPosition.Positionnumber) {
			let index = this.order.positions.findIndex((p)=> p.Positionsnumber);
			if (index > 0) {
				this.order.positions[index] = this.selectedPosition;
			} 
		} else { // new position
			// positionnumber in steps of 10
			let num = 10;
			let len = this.order.positions.length;
			if (len > 0) {
				num = this.order.positions[len-1].Positionnumber + 10;
			}
			this.selectedPosition = num;
			
			this.order.positions.push(this.selectedPosition);
		}
		
		// new selected position
		this.selectedPosition = new Position(true);
		
	}
}

class Order {
	id; 
	title;
	supplier;
	notes;	
		
	positions;
	
	constructor (){
		this.id = 0;
		this.title="";
		this.supplier="";
		this.notes="";
		
		this.positions = [];
	}
}

class Position {
	// model
	Positionnumber;
	Title;
	UnitNetPrice;
	Ammount=1;
	EstimatedDelivery;
	
	// vm
	isSelected=false;
	isDirty = false;
	
	constructor(selected) {
		this.isSelected = selected;
	}	
	 
	@computedFrom('UnitNetPrice','Ammount')
	get Total() {
		return this.UnitNetPrice * this.Ammount;
	}	
	
	@computedFrom('Title','UnitNetPrice','Ammount','EstimatedDelivery')
	get hasChanged() {
		_dirty = true;
		return _dirty;
	}
	
	resetDirty() {
		_dirty = false;
	}	
}

export class OrderRepository {
	records = null;
	table = "orders";
	
	constructor (tableName) {
		this.table=tableName;

		if (this.records == null) {
			this.records = JSON.parse(localStorage.getItem(this.table)) || [];
		}
	}
	
	load(id) {	
		let index = number(id)-1;
		if (index >= this.records.length) return Promise.reject("id out of range");		
		return Promise.resolve(this.records[index] );
	}
	
	save(record) {
		if (!record) return;
		
		//debugger;
		if (!record.id) {
			record.id = this.getNextId();
		}
		
		this.records.push( record );
		
		localStorage.setItem(this.table, JSON.stringify(this.records));
	}
	
	getNextId() {
		return this.records.length;
	}
}