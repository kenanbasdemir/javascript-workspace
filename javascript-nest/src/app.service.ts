import { Injectable } from '@nestjs/common';
import ProductList from './productList';

@Injectable()
export class AppService {

  productList: ProductList

  constructor(){
    this.productList = new ProductList()
  }

  getProductList(): string {
    return JSON.stringify(this.productList);
  }
}
