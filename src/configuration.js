import {singleton} from 'aurelia-framework';

@singleton()
export class Configuration {
	usefeatures = "1.0";
	defaultCulture = "de-DE";
	toastOnSuccess = false;
	toastOnFailure = true;
}