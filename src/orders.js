"use strict"
export class ChildRouter{
  heading = 'Orders';

  configureRouter(config, router){
    config.map([
      { route: ['','list'],  moduleId: './orders/index',      nav: true, title:'Orders' },
      { route: 'order/:id',  moduleId: './orders/edit', href: 'order', nav: true, title:'Order' }
    ]);

    this.router = router;
  }
}