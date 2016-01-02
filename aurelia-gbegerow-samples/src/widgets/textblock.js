export class Textblock {

  type = 'textblock';
  name = 'Textblock';
  icon = 'fa-font';
  text = 'Lorem ipsum';

  activate(model) {
    this.text = model;
  }
}