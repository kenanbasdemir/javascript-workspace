import DataResult from "./dataResult.js";

export default class ErrorDataResult extends DataResult {
    constructor(data){
        super(data, false)
    }

    constructor(data, message){
        super(data, false, message)
    }
}