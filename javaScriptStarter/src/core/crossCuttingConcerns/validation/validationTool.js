export default class ValidationTool {

    validate(validator, entity){
        let errors = validator.validate(entity)
        
        if(errors.length > 0){
            // let errorMessage = errors.reduce((acc, err) =>
            //     `${acc}\n${err.key} : ${err.value}`
            // , '')

            let errorMessage = ""

            for(let i = 0; i < errors.length; i++) {
                errorMessage += errors[i].key + " : " + errors[i].value;
            }

            throw new Error(errorMessage)
        }
    }

}