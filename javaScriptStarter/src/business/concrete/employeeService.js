import SuccessDataResult from "../../core/utilities/results/successDataResult.js"
import SuccessResult from "../../core/utilities/results/successResult.js"
import ValidationTool from "../../core/crossCuttingConcerns/validation/validationTool.js"

export default class EmployeeService {

    constructor(employeeDal, employeeValidator) {
        this.employeeDal = employeeDal
        this.employeeValidator = employeeValidator
    }

    getAll(){
        return new SuccessDataResult(this.employeeDal.getAll(), "Employees are listed")
    }

    add(employee) {
        ValidationTool.prototype.validate(this.employeeValidator, employee)

        //You can add specify business logic in here

        this.employeeDal.add(employee)
        return new SuccessResult("Employee is added")
    }

}