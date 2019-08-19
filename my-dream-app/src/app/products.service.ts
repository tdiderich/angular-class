import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  private products = ['A Book', 'Two Books'];
  productsUpdated = new Subject();

  addProduct(productName: string) {
    this.products.push(productName);
    this.productsUpdated.next();
  }

  getProducts() {
    return [...this.products]
  }

  deleteProduct(productName: string) {
    this.products = this.products.filter(p => p !== productName);
    this.productsUpdated.next();
  }

}
