import { Injectable, signal } from '@angular/core';
import { Product } from '../../models/product-models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);

  addToCart(product: Product) {
    console.log(product);
    this.cart.set([...this.cart(), product]);
    console.log(this.cart().length);
  }

  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((item) => item.id !== id));
  }

  constructor() {}
}
