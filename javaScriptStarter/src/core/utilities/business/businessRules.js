export default class BusinessRules {
    run(...rules){
        for (let i = 0; i < rules.length; i++) {
            const rule = rules[i];
            if(!rule.success){
                return rule
            }
        }
    }
}