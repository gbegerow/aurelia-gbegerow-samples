import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Demos';
    
    // TODO Hirachic like https://github.com/cmichaelgraham/aurelia-typescript/tree/master/multi-level-menu
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome', icon: 'fa-home' },
      { route: 'interpolation',    moduleId: './interpolation',   nav: true, title:'Strings', icon: 'fa-magic'},
      { route: 'simpleform',    moduleId: './simpleform',   nav: true, title:'Simple Form', icon: 'fa-list-alt'},
      { route: 'validationform',    moduleId: './validationform',   nav: true, title:'Form Validation', icon: 'fa-check-square-o'},
      { route: 'custelem',    moduleId: './custelem',   nav: true, title:'Custom Element', icon: 'fa-html5'},
      { route: 'custatt',    moduleId: './custatt',   nav: true, title:'Custom Attribute', icon: 'fa-comment-o'},
      { route: 'flickr',        moduleId: './flickr',       nav: true, title:'Flickr', icon: 'fa-camera-retro' },
      { route: 'clickr',        moduleId: './clickr',       nav: true, title:'Clickr', icon: 'fa-hand-o-left' },
      { route: 'northwind',  moduleId: './northwind', nav: true, title:'Northwind', icon: 'fa-database' },
      { route: 'adalauth',  moduleId: './adalauth', nav: true, title:'Authentification', icon: 'fa-users' },
      { route: 'localization',  moduleId: './localization', nav: true, title:'Localization', icon: 'fa-globe' },
      { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router', icon: 'fa-sitemap' },
      { route: 'maps',  moduleId: './maps', nav: true, title:'Maps', icon: 'fa-map-marker' },
      { route: 'datavis',  moduleId: './datavis', nav: true, title:'Data Vis (D3)', icon: 'fa-area-chart' },
      { route: 'data3d',  moduleId: './data3d', nav: true, title:'WebGL', icon: 'fa-cube' },
      { route: 'gameengine',  moduleId: './gameengine', nav: true, title:'Game', icon: 'fa-rocket' },
      { route: 'theme',  moduleId: './theme', nav: true, title:'Theme', icon: 'fa-paint-brush' },
      { route: 'moment',  moduleId: './moment', nav: true, title:'Moment', icon: 'fa-clock-o' },
      { route: 'debugit',  moduleId: './debugit', nav: true, title:'Debugging', icon: 'fa-bug' },
      { route: 'debugbinding',  moduleId: './debugbinding', nav: true, title:'Debug Binding', icon: 'fa-crosshairs' },
      { route: 'eventaggregator',  moduleId: './eventaggregator-demo', nav: true, title:'Event Aggregator', icon: 'fa-cubes' },
      { route: 'converter',  moduleId: './converter', nav: true, title:'Value Converter', icon: 'fa-filter' },
      { route: 'parts',  moduleId: './parts', nav: true, title:'Template Parts', icon: 'fa-puzzle-piece' },
      { route: 'animation',  moduleId: './animation-demo', nav: true, title:'Animation', icon: 'fa-film' },
      { route: 'ts',  moduleId: './ts-demo', nav: true, title:'TypeScript', icon: 'fa-paw'  },
      { route: 'ts',  moduleId: './ts-demo', nav: true, title:'TypeScript', icon: 'fa-paw'  },
      { route: 'shadow',  moduleId: './shadow-demo', nav: true, title:'ShadowDom', icon: 'fa-moon-o'  },
      { route: 'plugins',  moduleId: './plugins-demo', nav: true, title:'Plugins', icon: 'fa-puzzle-piece'  },
    ]);
    // fa-empire fa-rebel fa-html5 fa-css3 fa-area-chart 
    this.router = router;
  }
}
