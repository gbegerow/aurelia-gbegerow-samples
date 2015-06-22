"use strict"
import {bindable,computed} from 'aurelia-framework';

export class NavBar {
  @bindable router = null;
 
}

export class FilterTopLevelValueConverter {
  toView(array) {
     if (array === undefined || array === null) {
        return false;
    }
    
    return array.filter((node)=> node.settings.level === 0);
  }
}

export class FilterSecondaryLevelValueConverter {
  toView(array) {
     if (array === undefined || array === null) {
        return false;
    }
    
    return array.filter((node)=> node.settings.level === 1);
  }
}
