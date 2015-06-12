import {inject,LogManager} from 'aurelia-framework';
export class LogSample{
  heading="Look in console!";
  logger;

  constructor(){
      this.logger = LogManager.getLogger('loggerSample');
      this.logger.info("Log it in constructor");
  }

  activate(){
     this.logger.info("Log it on activate");
  } 
}