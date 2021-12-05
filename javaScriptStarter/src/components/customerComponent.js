import CustomerMockDal from "../dataAccess/mock/customerMockDal.js";
import CustomerService from "../business/concrete/customerService.js";
import Customer from "../entities/concrete/customer.js";
import CustomerValidator from "../business/validationRules/customerValidator.js"
import { ElasticLogger } from "../core/crossCuttingConcerns/logging/logger.js";

//DECLARATION

let customerService = new CustomerService(
    new CustomerMockDal(),
    new CustomerValidator(),
    new ElasticLogger())

function add(customer) {
    let result = customerService.add(customer)
    console.log(result);
}

function getAll() {
    let result = customerService.getAll()
    console.log(result);
}

function getById(id) {
    let result = customerService.getById(id)
    console.log(result);
}

//USE CASES----------------

//This function is add customer to Mock Database
// let customerForCreate = new Customer(4, "Kenan", "Başdemir", "Sivas", 25, "123456")
// add(customerForCreate)

//This function is list all customer from Mock Database
getAll()

//This function is get customer by id field to Mock Database
// getById(4)

//USE CASES WITH HTML------

// function addWithHtml() {
//     let id = document.getElementById('customerId')
//     let firstName = document.getElementById('customerFirstName')
//     let lastName = document.getElementById('customerLastName')
//     let city = document.getElementById('customerCity')
//     let age = document.getElementById('customerAge')
//     let cardNumber = document.getElementById('customerCardNumber')

//     let customerForCreate = new Customer(id, firstName, lastName, city)
// }