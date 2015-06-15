import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
//import 'thomaspark/bootswatch/paper/bootstrap.min.css!';
//import 'thomaspark/bootswatch/cosmo/bootstrap.min.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia Demos';
    
    // Hirachic like https://github.com/cmichaelgraham/aurelia-typescript/tree/master/multi-level-menu
    config.map([
      { route: ['','welcome'],  moduleId: './welcome',      nav: true, title:'Welcome', icon: 'fa-home', done:1, settings: { level: 0, show: true } },
      { route: 'interpolation',    moduleId: './interpolation',   nav: true, title:'Strings', icon: 'fa-magic', done:0,settings: { level: 1, show: true }},
      { route: 'simpleform',    moduleId: './simpleform',   nav: true, title:'Simple Form', icon: 'fa-list-alt',done:1, settings: { level: 1, show: true }},
      { route: 'validationform',    moduleId: './validationform',   nav: true, title:'Form Validation', icon: 'fa-check-square-o', done:0,settings: { level: 1, show: true }},
      { route: 'custelem',    moduleId: './custelem',   nav: true, title:'Custom Element', icon: 'fa-html5', done:0,settings: { level: 1, show: true }},
      { route: 'custatt',    moduleId: './custatt',   nav: true, title:'Custom Attribute', icon: 'fa-comment-o', done:0,settings: { level: 1, show: true }},
      { route: 'flickr',        moduleId: './flickr',       nav: true, title:'Flickr', icon: 'fa-camera-retro', done:1, tags: ['http','bind','repeat'], settings: { level: 1, show: true } },
      { route: 'clickr',        moduleId: './clickr-inc',       nav: true, title:'Clickr Inc.', icon: 'fa-hand-o-left',done:1, tags: ['event','click','delegate','bind','computedFrom','css','observer','candeactivate'], settings: { level: 1, show: true } },
          { route: 'victory/:total',        moduleId: './victory',       nav: false, title:'You Won!' },
          { route: 'loose',  moduleId: './loose', nav: false, title:'You loose :-()' },
 
      { route: 'northwind',  moduleId: './northwind', nav: true, title:'Northwind', icon: 'fa-database', done:0, tags:['db','breeze'], settings: { level: 1, show: true } },
      { route: 'adalauth',  moduleId: './adalauth', nav: true, title:'Authentification', icon: 'fa-users', done:0,settings: { level: 1, show: true } },
      { route: 'localization',  moduleId: './localization', nav: true, title:'Localization', icon: 'fa-globe', done:0,settings: { level: 1, show: true } },
      { route: 'child-router',  moduleId: './child-router', nav: true, title:'Child Router', icon: 'fa-sitemap', done:1,settings: { level: 1, show: true } },
      { route: 'maps',  moduleId: './maps', nav: true, title:'Maps', icon: 'fa-map-marker', done: 0, settings: { level: 1, show: true } },
      { route: 'datavis',  moduleId: './datavis', nav: true, title:'Data Vis (D3)', icon: 'fa-area-chart', done: 0, settings: { level: 1, show: true } },
      { route: 'data3d',  moduleId: './data3d', nav: true, title:'WebGL', icon: 'fa-cube', done: 0, settings: { level: 1, show: true } },
      { route: 'gameengine',  moduleId: './gameengine', nav: true, title:'Game', icon: 'fa-rocket', done: 0, settings: { level: 1, show: true } },
      { route: 'theme',  moduleId: './theme', nav: true, title:'Theme', icon: 'fa-paint-brush', done: 1, settings: { level: 1, show: true } },
      { route: 'moment',  moduleId: './moment', nav: true, title:'Moment', icon: 'fa-clock-o', done: 0, settings: { level: 1, show: true } },
      { route: 'debugit',  moduleId: './debugit', nav: true, title:'Debugging', icon: 'fa-bug', done: 0, settings: { level: 1, show: true } },
      { route: 'debugbinding',  moduleId: './debugbinding', nav: true, title:'Debug Binding', icon: 'fa-crosshairs', done: 0, settings: { level: 1, show: true } },
      { route: 'eventaggregator',  moduleId: './eventaggregator-demo', nav: true, title:'Event Aggregator', icon: 'fa-cubes', done: 0, settings: { level: 1, show: true } },
      { route: 'converter',  moduleId: './converter', nav: true, title:'Value Converter', icon: 'fa-filter', done: 0, settings: { level: 1, show: true } },
      { route: 'parts',  moduleId: './parts', nav: true, title:'Template Parts', icon: 'fa-puzzle-piece', done: 0, settings: { level: 1, show: true } },
      { route: 'animation',  moduleId: './animation-demo', nav: true, title:'Animation', icon: 'fa-film', done: 0, settings: { level: 1, show: true } },
      { route: 'ts',  moduleId: './ts-demo', nav: true, title:'TypeScript', icon: 'fa-paw', done: 0, settings: { level: 1, show: true }  },
      { route: 'shadow',  moduleId: './shadow-demo', nav: true, title:'ShadowDom', icon: 'fa-moon-o', done: 0, settings: { level: 1, show: true }  },
      { route: 'plugins',  moduleId: './plugins-demo', nav: true, title:'Plugins', icon: 'fa-wrench', done: 0, settings: { level: 1, show: true }  },
      { route: 'less',  moduleId: './less-demo', nav: true, title:'Less', icon: 'fa-css3', done: 0, settings: { level: 1, show: true }  },
      { route: 'sass',  moduleId: './sass-demo', nav: true, title:'Sass', icon: 'fa-css3' , done: 0, settings: { level: 1, show: true } },
      { route: 'logging',  moduleId: './logging', nav: true, title:'Logging', icon: 'fa-microphone', done: 1, settings: { level: 1, show: true }  },
      { route: 'toasts',  moduleId: './toast-demo', nav: true, title:'Toasts', icon: 'fa-bullhorn', done: 0, settings: { level: 1, show: true }  },
      { route: 'unittests',  moduleId: './unittests', nav: true, title:'Unittests', icon: 'fa-ellipsis-v', done: 0, settings: { level: 1, show: true }  },
      { route: 'e2etests',  moduleId: './e2etests', nav: true, title:'End To End Tests', icon: 'fa-ellipsis-h' , done: 0, settings: { level: 1, show: true } },
      { route: 'markdown',  moduleId: './markdown', nav: true, title:'Markdown Editor', icon: 'fa-edit', done: 0, settings: { level: 1, show: true }  },
      { route: 'modal',  moduleId: './modal-demo', nav: true, title:'Modal Dialog', icon: 'fa-question' , done: 0, settings: { level: 1, show: true } },
      { route: 'lifecycle',  moduleId: './lifecycle', nav: true, title:'Lifecycle', icon: 'fa-retweet' , done: 0, settings: { level: 1, show: true } },
      { route: 'compose',  moduleId: './compose-demo', nav: true, title:'Compose', icon: 'fa-flask' , done: 0, settings: { level: 1, show: true } },
      { route: 'di',  moduleId: './useconfig', nav: true, title:'Dependency Injection', icon: 'fa-cog' , done: 0, tags: ['di','dependency','singleton'],settings: { level: 1, show: true } },
      //{ route: 'di',  moduleId: './di-demo', nav: true, title:'Dependency Injection', icon: 'fa-download' , done: 0, tags: ['di','dependency','singleton','transient'], settings: { level: 1, show: true } },
    ]);
    // fa-empire fa-rebel 
    this.router = router;
  }
}
