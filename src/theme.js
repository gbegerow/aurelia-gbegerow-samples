
import { inject, bindable } from 'aurelia-framework';
import {regexpEscape} from 'utils';

export class Theme {
	@bindable
	themes = [
		{ name: 'default', href: 'http://localhost:9000/jspm_packages/github/twbs/bootstrap@3.3.6/css/bootstrap.css' },
		{ name: 'cerulean', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/cerulean/bootstrap.min.css' },
		{ name: 'cosmo', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/cosmo/bootstrap.min.css' },
		{ name: 'cyborg', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/cyborg/bootstrap.min.css' },
		{ name: 'darkly', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/darkly/bootstrap.min.css' },
		{ name: 'flatly', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/flatly/bootstrap.min.css' },
		{ name: 'global', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/global/bootstrap.min.css' },
		{ name: 'journal', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/journal/bootstrap.min.css' },
		{ name: 'lumen', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/lumen/bootstrap.min.css' },
		{ name: 'paper', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/paper/bootstrap.min.css' },
		{ name: 'readable', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/readable/bootstrap.min.css' },
		{ name: 'sandstone', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/sandstone/bootstrap.min.css' },
		{ name: 'simplex', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/simplex/bootstrap.min.css' },
		{ name: 'slate', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/slate/bootstrap.min.css' },
		{ name: 'spacelab', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/spacelab/bootstrap.min.css' },
		{ name: 'superhero', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/superhero/bootstrap.min.css' },
		{ name: 'united', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/united/bootstrap.min.css' },
		{ name: 'yeti', href: 'jspm_packages/github/thomaspark/bootswatch@3.3.6/yeti/bootstrap.min.css' },
	];

	@bindable 
	currentTheme;

	canActivate() {
		this.findCurrentTheme();
	}
	
	
	currentThemeChanged(newvalue, oldvalue) {
		this.setCurrentTheme(newvalue, oldvalue);
	}
	
	findCurrentTheme() {	
		for (let i = 0, link_tag = document.getElementsByTagName("link"); i < link_tag.length; i++) {
			if (link_tag[i].rel.match(/stylesheet/i)) {
				this.compareLinks(link_tag[i].href.toLowerCase());
			}
		}
	}
	
	compareLinks(href){
		let link = href.toLowerCase(); // might be absolute url
		let knownTheme = this.themes.find((l) => link.indexOf( l.href.toLowerCase()) > -1);
		if (knownTheme) {
			this.currentTheme = knownTheme; 
		}					
	}

	setCurrentTheme(newvalue, oldvalue) {
		if (!oldvalue) return;
		
		let i, link_tag;
		let old = new RegExp(oldvalue.href, i);
		
		for (i = 0, link_tag = document.getElementsByTagName("link"); i < link_tag.length; i++) {
			if (link_tag[i].rel.match(/stylesheet/i) && link_tag[i].href.match(old)) {
				link_tag[i].href = newvalue.href;
				
				// todo: save to cookie/localstorage
				return;
			}
		}
	}

} 

