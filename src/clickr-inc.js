import {inject,bindable, computedFrom} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {ObserverLocator} from 'aurelia-framework';
import 'clickr-inc.css!';

const blueIndex=0;
const yellowIndex = 1;
const redIndex = 2;
const greenIndex = 3;

@inject(Router, ObserverLocator)
export class ClickrInc{
  heading = 'Clickr Inc.';
  clicks = 0;
  max =0;
  blue=0;
  yellow=0;
  red=0;
  green=0;
  message = "click it on";
  
  router = null;
  observerLocator= null;

  constructor(router, observerLocator) {
    this.router = router;
    this.observerLocator = observerLocator;
 
  
  }


  @computedFrom('blue','yellow','red','green')
  get clickTotal() {
    let total = 0;
    //return //clicks.forEach(c => total += c)
    total = this.blue + 
          this.yellow + 
          this.red + 
          this.green;
         
    //this.clickTotalChanged(total);
     
    return total;
  }
  
  clickTotalChanged(newTotal, oldTotal) {
    this.clicks++;
    let t = newTotal || this.clickTotal;
    
    if (t > this.max) {
      this.max = t;
    }
    
    //debugger;
    this.message = "click it on"; 
    if (t > 1 && t < 5) {
      this.message = "Yep. You got it. Go on.";
    } else if (t > 10 && t < 16) {
      this.message="You are incredible!";
     } else if (t > 50 && t < 63) {
      this.message="Run Forrest, Run!";
    } else if (t > 100 && t < 116) {
      this.message="Coming closer!";
    } else if (t > 70 && t < 80) {
      this.message="You can do better than that!";
    } else if (t > 150) {
      this.router.navigate("victory/"+ t);
    }
  }
 
   incBlue() { 
     let diff = Math.abs(this.green - this.red);
     
     if (diff < this.red) {
        this.blue += diff;
     } else {
       this.red = 0;
       this.blue = 0;
     }
   }
   incYellow() { 
     this.yellow++; 
   }
   incRed() { 
     this.red += 2; 
   }
   incGreen() { 
     this.green += this.red; 
     if (this.green > this.yellow * 3) {
       this.green = this.yellow;
     }
   }

  activate(){
    //debugger; 
     this.observerLocator.getObserver(this,"clickTotal").subscribe(() =>this.clickTotalChanged());
  }

  canDeactivate() {
    if (this.clickTotal > 0 & this.clickTotal < 16) {
      return confirm('Are you sure you want to leave? All Progress is lost!');
    }
  }
}


