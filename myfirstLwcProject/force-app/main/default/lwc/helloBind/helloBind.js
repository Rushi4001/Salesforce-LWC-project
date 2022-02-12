import { LightningElement } from 'lwc';

export default class HelloBind extends LightningElement {
    h1="admin";
    
    handlechange(event){
        this.h1=event.target.value;
    }
}