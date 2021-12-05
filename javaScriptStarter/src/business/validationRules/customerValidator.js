import Validator from "../../core/crossCuttingConcerns/validation/validator.js";
import ValidationError from "../../core/crossCuttingConcerns/validation/validationError.js"

export default class CustomerValidator extends Validator {

    validate(context){
        let requiredFields = "id firstName lastName age city creditCardNumber".split(" ")
        let errors = super.checkRequiredFields(context, requiredFields)

        if (context.age <= 0) {
            errors.push(new ValidationError("age", "Age isn't greater than 0"))
        } else if (typeof context.age !== 'number') {
        // } else if (Number.isNaN(Number.parseInt(+context.age))) {
            errors.push(new ValidationError("age", `Validation problem. ${context.age} is not a number`))
        }
        return errors
    }
}   