import { LightningElement } from 'lwc';

export default class Child extends LightningElement {

    _userinfo = {
        fname: "rushikesh",
        lname: "kale"
    };
    get userinfo() {
        return this._userinfo;
    }
    set userinfo(value) {
        this._userinfo = value;
    }



}