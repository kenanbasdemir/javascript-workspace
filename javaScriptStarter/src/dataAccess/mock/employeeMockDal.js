import Repository from "../../core/dataAccess/repository.js";
import Employee from "../../entities/concrete/employee.js"

export default class EmployeeMockDal extends Repository {
    constructor(){
        super()
        this.users = [
            new Employee(4, "Cansu", "Değirmen", "İstanbul", 20, 5000),
            new Employee(5, "Mücahit", "Kaya", "Bolu", 23, 17000),
            new Employee(6, "Eren", "Arı", "Diyarbakır", 20, 15000)
        ]
    }

    getById(id){
        return this.users.find(user => user.id == id);
    }

    getAll(){
        return this.users
    }

    getAllWithSorted(expression){
        return this.users.sort(expression)
    }

    add(customer) {
        this.users.push(customer)
    }
}