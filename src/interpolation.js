
export class Interpolation{
	heading = "Demo String Interpolation";
	name = "Bonn-To-Code";
	greetings = "Hallo ";
	
	person = {
		firstname : "John",
		age : 18
	};
	message = `${this.person.firstname} is ${this.person.age} years old.`;
	
	isVisible = false;
	
}