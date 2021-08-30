import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}
  addToCartS(product: Product) {
    this.items.push(product);
    console.log(this.items);
  }
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
  getItemsS() {
    return this.items;
  }

  clearCartS() {
    this.items = [];
    return this.items;
  }
}
