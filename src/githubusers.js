import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
  }

  activate() {
    // switched to search 
    return this.http.fetch('search/users?q=aurelia')
      .then(response => response.json())
      .then(result => this.users = result.items);
  }
}
