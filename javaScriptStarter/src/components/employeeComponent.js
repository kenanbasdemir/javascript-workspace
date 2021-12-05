import EmployeeService from "../business/concrete/employeeService.js";
import EmployeeValidator from "../business/validationRules/employeeValidator.js";
import EmployeeMockDal from "../dataAccess/mock/employeeMockDal.js";
import Employee from "../entities/concrete/employee.js";

let employeeService = new EmployeeService(new EmployeeMockDal(), new EmployeeValidator());

let employee = new Employee(7, "Deniz", "Kenan", "İzmir", 18, 20000)
let resultForCreate = employeeService.add(employee)

console.log(resultForCreate);

let result = employeeService.getAll()

console.log(result);