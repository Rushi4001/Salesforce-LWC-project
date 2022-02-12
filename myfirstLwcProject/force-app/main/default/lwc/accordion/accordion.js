import { LightningElement } from 'lwc';

export default class Accordion extends LightningElement {
    section='';

    handleclick(event){
        this.section = 'Cars Details';
    }

    handleSectionToggle(event){
        this.section=event.detail.openSections;
    }
}