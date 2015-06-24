"use strict"
import {inject,bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
  heading = 'Flickr';

  @bindable queryrunning = true;

  images = [];
  url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=bonn,japanischer,garten&tagmode=all&format=json';
  //url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=paderquellen&tagmode=all&format=json';

  constructor(http){
    this.http = http;
  }

  activate(){
    return this.http.jsonp(this.url).then(response => {
      // throttle 2s
      setTimeout(()=> { // how to do it with promise? Should be cleaner
        this.queryrunning = false;
        this.images = response.content.items;
      }, 2000);
      
    }); 
  }
}
