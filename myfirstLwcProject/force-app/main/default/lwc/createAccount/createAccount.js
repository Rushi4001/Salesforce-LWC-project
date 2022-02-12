import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone';

export default class CreateAccount extends LightningElement {

    objectApiName = ACCOUNT_OBJECT ;
    myFields = [ACCOUNT_NAME,ACCOUNT_PHONE];

    handlePage(){
        // what code need to be executed after account creation you can write here...
    }

}