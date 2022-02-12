import { LightningElement } from 'lwc';

export default class HelloExp extends LightningElement {
    firstName = '';
    lastName = '';

    handlechange(event){
        const abc = event.target.name;
        if(abc === 'firstName')
        {
            this.firstName=event.target.name;
        }
        elseif(abc === 'lastName')
        {
            this.lastName=event.target.name;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}