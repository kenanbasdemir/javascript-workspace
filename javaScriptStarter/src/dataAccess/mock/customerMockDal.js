import Repository from "../../core/dataAccess/repository.js"
import Customer from "../../entities/concrete/customer.js";

export default class CustomerMockDal extends Repository {
    constructor(){
        super()
        this.users = [
            new Customer(1, "Engin", "Demiroğ", "Ankara", 36, "123456"),
            new Customer(2, "Beytullah", "Zor", "Ankara", 36, "123456"),
            new Customer(3, "Mustafa", "Sansar", "İstanbul", 36, "123456")
        ]
    }

    getById(id){
        return this.users.find(user => user.id == id);
    }

    getAll(){
        return this.users
    }

    getAllWithSorted(filter){
        return this.users.sort(filter)
    }

    add(customer) {
        this.users.push(customer)
    }
}