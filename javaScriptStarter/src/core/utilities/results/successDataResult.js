import DataResult from "./dataResult.js";

export default class SuccessDataResult extends DataResult {
    constructor(data){
        super(data, true)
    }

    constructor(data, message){
        super(data, true, message)
    }
}