export default class Product {

    id: number
    name: string
    quantity:number
    unitPrice:number

    constructor(id: number, name: string, quantity: number, unitPrice: number) {
        this.id = id
        this.name = name
        this.quantity = quantity
        this.unitPrice = unitPrice
    }
}