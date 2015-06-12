import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Demos';
    
    // TODO Hirachic like https://github.com/cmichaelgraham/aurelia-typescript/tree/master/multi-level-menu
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome', icon: 'fa-home', settings: { level: 0, show: true } },
      { route: 'interpolation',    moduleId: './interpolation',   nav: true, title:'Strings', icon: 'fa-magic', settings: { level: 1, show: true }},
      { route: 'simpleform',    moduleId: './simpleform',   nav: true, title:'Simple Form', icon: 'fa-list-alt', settings: { level: 1, show: true }},
      { route: 'validationform',    moduleId: './validationform',   nav: true, title:'Form Validation', icon: 'fa-check-square-o', settings: { level: 1, show: true }},
      { route: 'custelem',    moduleId: './custelem',   nav: true, title:'Custom Element', icon: 'fa-html5', settings: { level: 1, show: true }},
      { route: 'custatt',    moduleId: './custatt',   nav: true, title:'Custom Attribute', icon: 'fa-comment-o', settings: { level: 1, show: true }},
      { route: 'flickr',        moduleId: './flickr',       nav: true, title:'Flickr', icon: 'fa-camera-retro', settings: { level: 1, show: true } },
      { route: 'clickr',        moduleId: './clickr',       nav: true, title:'Clickr', icon: 'fa-hand-o-left', settings: { level: 1, show: true } },
      { route: 'northwind',  moduleId: './northwind', nav: true, title:'Northwind', icon: 'fa-database', settings: { level: 1, show: true } },
      { route: 'adalauth',  moduleId: './adalauth', nav: true, title:'Authentification', icon: 'fa-users', settings: { level: 1, show: true } },
      { route: 'localization',  moduleId: './localization', nav: true, title:'Localization', icon: 'fa-globe', settings: { level: 1, show: true } },
      { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router', icon: 'fa-sitemap', settings: { level: 1, show: true } },
      { route: 'maps',  moduleId: './maps', nav: true, title:'Maps', icon: 'fa-map-marker', settings: { level: 1, show: true } },
      { route: 'datavis',  moduleId: './datavis', nav: true, title:'Data Vis (D3)', icon: 'fa-area-chart', settings: { level: 1, show: true } },
      { route: 'data3d',  moduleId: './data3d', nav: true, title:'WebGL', icon: 'fa-cube', settings: { level: 1, show: true } },
      { route: 'gameengine',  moduleId: './gameengine', nav: true, title:'Game', icon: 'fa-rocket', settings: { level: 1, show: true } },
      { route: 'theme',  moduleId: './theme', nav: true, title:'Theme', icon: 'fa-paint-brush', settings: { level: 1, show: true } },
      { route: 'moment',  moduleId: './moment', nav: true, title:'Moment', icon: 'fa-clock-o', settings: { level: 1, show: true } },
      { route: 'debugit',  moduleId: './debugit', nav: true, title:'Debugging', icon: 'fa-bug', settings: { level: 1, show: true } },
      { route: 'debugbinding',  moduleId: './debugbinding', nav: true, title:'Debug Binding', icon: 'fa-crosshairs', settings: { level: 1, show: true } },
      { route: 'eventaggregator',  moduleId: './eventaggregator-demo', nav: true, title:'Event Aggregator', icon: 'fa-cubes', settings: { level: 1, show: true } },
      { route: 'converter',  moduleId: './converter', nav: true, title:'Value Converter', icon: 'fa-filter', settings: { level: 1, show: true } },
      { route: 'parts',  moduleId: './parts', nav: true, title:'Template Parts', icon: 'fa-puzzle-piece', settings: { level: 1, show: true } },
      { route: 'animation',  moduleId: './animation-demo', nav: true, title:'Animation', icon: 'fa-film', settings: { level: 1, show: true } },
      { route: 'ts',  moduleId: './ts-demo', nav: true, title:'TypeScript', icon: 'fa-paw', settings: { level: 1, show: true }  },
      { route: 'shadow',  moduleId: './shadow-demo', nav: true, title:'ShadowDom', icon: 'fa-moon-o', settings: { level: 1, show: true }  },
      { route: 'plugins',  moduleId: './plugins-demo', nav: true, title:'Plugins', icon: 'fa-wrench', settings: { level: 1, show: true }  },
      { route: 'less',  moduleId: './less-demo', nav: true, title:'Less', icon: 'fa-css3', settings: { level: 1, show: true }  },
      { route: 'sass',  moduleId: './sass-demo', nav: true, title:'Sass', icon: 'fa-css3' , settings: { level: 1, show: true } },
      { route: 'logging',  moduleId: './logging-demo', nav: true, title:'Logging', icon: 'fa-microphone', settings: { level: 1, show: true }  },
      { route: 'toasts',  moduleId: './toast-demo', nav: true, title:'Toasts', icon: 'fa-bullhorn', settings: { level: 1, show: true }  },
      { route: 'unittests',  moduleId: './unittests', nav: true, title:'Unittests', icon: 'fa-ellipsis-v', settings: { level: 1, show: true }  },
      { route: 'e2etests',  moduleId: './e2etests', nav: true, title:'End To End Tests', icon: 'fa-ellipsis-h' , settings: { level: 1, show: true } },
      { route: 'markdown',  moduleId: './markdown', nav: true, title:'Markdown Editor', icon: 'fa-edit', settings: { level: 1, show: true }  },
      { route: 'modal',  moduleId: './modal-demo', nav: true, title:'Modal Dialog', icon: 'fa-question' , settings: { level: 1, show: true } },
    ]);
    // fa-empire fa-rebel fa-html5 fa-css3 fa-area-chart 
    this.router = router;
  }
}
