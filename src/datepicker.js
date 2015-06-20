import {inject, customElement, bindable} from 'aurelia-framework';
import $ from 'jquery';
import {moment} from 'moment';

import 'eternicode/bootstrap-datepicker/js/bootstrap-datepicker';
import 'eternicode/bootstrap-datepicker/css/bootstrap-datepicker.min.css!';


@inject(Element)
@bindable("value")
@customElement('datepicker')
export class DatePicker {

    @bindable format = "dd.MM.yyyy";
    @bindable language = "de";

    constructor(element) {
        this.element = element;
    }

    attached() {
        this.datePicker = $(this.element).find('.input-group.date')
            .datepicker({
                format: this.format,
                language: this.language,
                showClose: true,
                showTodayButton: false,
                orientation: "top left"
            });

        this.datePicker.on("changeDate", (e) => {
            this.value = e.date;
            console.log("Date changed: "+ e.date);
            });
    }
}