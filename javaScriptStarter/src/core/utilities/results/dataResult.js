import Result from "./result.js";

export default class DataResult extends Result {
    constructor(data, success){
        super(success)
        this.data = data
    }

    constructor(data, success, message){
        super(success, message)
        this.data = data
    }
}