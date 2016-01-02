import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .globalResources('converter/stringifyValueConverter');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(a => a.setRoot());
}
