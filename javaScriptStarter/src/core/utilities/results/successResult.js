import Result from "./result.js";

export default class SuccessResult extends Result {
    constructor(){
        super(true)
    }

    constructor(message) {
        super(true, message)
    }
}