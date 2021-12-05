export default class Result {

    constructor(success){
        this.success = success;
        this.message = undefined;
    }

    constructor(success, message){
        this.success = success;
        this.message = message;
    }
}