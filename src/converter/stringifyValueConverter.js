"use strict"
export class StringifyValueConverter {
	toView(value) {
		return JSON.stringify(value, null, 4 );
	}
}