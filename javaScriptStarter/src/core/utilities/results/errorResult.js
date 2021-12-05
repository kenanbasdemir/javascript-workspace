import Result from "./result.js";

export default class ErrorResult extends Result {
    constructor(){
        super(false)
    }

    constructor(message) {
        super(false, message)
    }
}