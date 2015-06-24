import {Configuration} from 'configuration';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');
    
  aurelia
    .globalizeResources('converter/stringifyValueConverter');
//    .globalizeResources('datepicker');

  aurelia.start().then(a => a.setRoot());
}
