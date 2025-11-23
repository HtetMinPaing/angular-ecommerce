import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/product-models';
import { CartService } from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-cart-item',
  imports: [],
  template: `
    <div class="bg-white shadow-md border rounded-xl p-6 flex justify-between">
      <img [src]="item().image" [alt]="item().title" class="w-12 h-12 object-cover" />
      <div class="flex flex-col">
        <span class="text-base">{{ item().title }}</span>
        <span class="text-sm">{{ item().price }}</span>
      </div>
      <div class="flex-1"></div>
      <button (click)="cartService.removeFromCart(item().id)">Remove</button>
    </div>
  `,
  styles: ``,
})
export class CartItem {
  item = input.required<Product>();
  cartService = inject(CartService);
}
