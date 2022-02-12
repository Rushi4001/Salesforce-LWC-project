import { LightningElement } from 'lwc';

export default class JayGanesh extends LightningElement {

    displayValue ="Jay Ganesh";

    changeHandler(event){
        this.displayValue=event.target.value;
    }
}