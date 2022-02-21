import Product from "./product";

export default class ProductList {
    products : Product[]

    constructor(){
        this.products = [
            new Product(1, "Keyboard", 25, 200),
            new Product(2, "Mouse", 30, 150),
            new Product(3, "Monitor", 35, 1200),
            new Product(4, "Speaker", 40, 90)
        ]
    }
}