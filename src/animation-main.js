import {Configuration} from 'configuration';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css');
    .withSingleton(Configuration);

  aurelia.start().then(a => a.setRoot());
}
