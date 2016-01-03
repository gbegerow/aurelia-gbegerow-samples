
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

// jspm install sortable=github:rubaxa/sortable@1.2.0
import sortable from 'sortable';

import {Textblock} from './widgets/textblock';
import {Header} from './widgets/header';
import {Articles} from './widgets/articles';
import {Logo} from './widgets/logo';

@inject(EventAggregator, Textblock, Header, Articles, Logo)
export class ReportToolbox {

  widgets;

  constructor(evtAgg, textBlock, header, articles, logo) {
    this.widgets = [
      textBlock,
      header,
      articles,
      logo
    ];
    this.ea = evtAgg;
  }

  attached() {
    new sortable(this.toolboxList, {
      sort: false,
      group: {
        name: "report",
        pull: 'clone',
        put: false
      }
    });
  }

  printReport() {
    window.print();
  }

  clearReport() {
    this.ea.publish('clearReport');
  }
}