import ValidationTool from "../../core/crossCuttingConcerns/validation/validationTool.js";
import ErrorResult from "../../core/utilities/results/errorResult.js"
import SuccessResult from "../../core/utilities/results/successResult.js"
import BusinessRules from "../../core/utilities/business/businessRules.js";
import SuccessDataResult from "../../core/utilities/results/successDataResult.js"
import Messages from "../constants/messages.js";

export default class CustomerService {

    constructor(customerDal, validator, logger) {
        this.customerDal = customerDal;
        this.validator = validator;
        this.logger = logger;
    }

    getById(id) {
        return new SuccessDataResult(this.customerDal.getById(id), Messages.prototype.userReturned())
    }

    add(customer) {
        //prototype static amaçlı kullanılıyor.
        ValidationTool.prototype.validate(this.validator, customer)

        let result = BusinessRules.prototype.run(
            this._checkIfNameEngin(customer.firstName)
        )

        if (result) {
            return result
        }

        this.customerDal.add(customer)
        
        this.logger.log(customer);

        return new SuccessResult(Messages.prototype.userCreated())
    }

    getAll(){
        return new SuccessDataResult(this.customerDal.getAll(), Messages.prototype.usersListed())
    }

    getAllForFirstNameSorted(){
        let sortExpression = (customerBefore, customerAfter) => {
            if (customerBefore.firstName > customerAfter.firstName) return 1
            else if (customerBefore.firstName === customerAfter.firstName) return 0
            else return -1
        }
        return new SuccessDataResult(
            this.customerDal.getAllWithSorted(sortExpression)
        , Messages.prototype.usersListed())
    }

    _checkIfNameEngin(name){
        if(name.localeCompare('Engin') == 0){
            return new ErrorResult(Messages.prototype.wrongUserName(name))
        }
        return new SuccessResult() 
    }
}