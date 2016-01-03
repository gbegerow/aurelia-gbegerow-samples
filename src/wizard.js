;

export class Wizard {
	pages = [];
	currentIndex = 0;

	next() {
		this.currentIndex++;
		this.refresh();
	}

	next() {
		this.currentIndex--;
		this.refresh();
	}

	first() {
		this.currentIndex = 0;
		this.refresh();
	}

	refresh() {
		if (this.currentIndex > pages.length) {
			this.currentIndex = pages.length - 1;
		} else if (this.currentIndex < 0) {
			this.currentIndex = 0;
		}

		for (let i = 0; i < pages.length; i++) {
			let element = array[i];
			element.active = (i === this.currentIndex);
		}
	}
}

export class WizardPage {
	title;
	name;
	active;
}