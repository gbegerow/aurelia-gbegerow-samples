"use strict"
import {inject,LogManager} from 'aurelia-framework';

const logger = LogManager.getLogger('loggerSample');
export class LogSample{
  heading="Look in console!";

  constructor(){
      logger.info("Log it in LogSample constructor");
  }

  activate(){
     logger.info("Log it on activate");
  } 
}