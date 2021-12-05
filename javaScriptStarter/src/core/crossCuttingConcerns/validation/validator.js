import ValidationError from "./validationError.js";

export default class Validator {
    validate(entity){
    }

    checkRequiredFields(entity, requiredFields) {
        let errors = []
        for (const field of requiredFields) {
            if (!entity[field]) {
                errors.push(errors.push(new ValidationError(field, "Field is required")))
            }
        }
        return errors
    }
}