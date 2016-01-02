import {inject, customElement, bindable, computedFrom} from 'aurelia-framework';
import $ from 'jquery';
import moment from 'moment';

// jspm install github:eternicode/bootstrap-datepicker
import 'eternicode/bootstrap-datepicker/js/bootstrap-datepicker';
//import 'eternicode/bootstrap-datepicker/css/bootstrap-datepicker.min.css!';


@inject(Element)
@bindable("value")
@customElement('datepicker')
export class DatePicker {

    @bindable format = "dd.MM.yyyy";
    @bindable language = "de";

    constructor(element) {
        this.element = element;
        
        moment().locale(this.language)
    }

    attached() {
        this.datePicker = $(this.element).find('.input-group.date')
            .datepicker({
                format: this.format,
                language: this.language,
                showClose: true,
                showTodayButton: false,
                //orientation: "bottom left"
            });

        this.datePicker.on("changeDate", (e) => {
            this.value = e.date;
            console.log("Date changed: "+ e.date);
            });
    }
    
    @computedFrom('value')
	get display() {
		if (this.value) {
            moment().locale(this.language)
			return moment(this.value).format("DD.MM.YYYY");
		}
		return undefined;
	}

}