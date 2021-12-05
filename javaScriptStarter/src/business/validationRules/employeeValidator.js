import Validator from "../../core/crossCuttingConcerns/validation/validator.js"

export default class EmployeeValidator extends Validator {
    validate(employee){
        let requireFields = "id firstName lastName city age salary".split(" ")
        // let requireFields = ["id", "age", "salary"]

        let errors = super.checkRequiredFields(employee, requireFields)

        //You can add specify validation control in here

        return errors
    }
}