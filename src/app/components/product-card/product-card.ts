import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/product-models';
import { Button } from '../button/button';
import { CartService } from '../../services/cart-service/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [Button],
  template: `
    <div
      class="bg-white h-full shadow-md border rounded-xl p-6 flex flex-col items-start gap-6 relative"
    >
      <img [src]="product().image" class="w-full aspect-video object-cover" />
      <div class="flex flex-col flex-1">
        <span class="text-md font-bold">{{ product().title }}</span>
        <span class="text-sm">{{ '$' + product().price }}</span>
      </div>
      <app-button
        label="Add to Cart"
        class="mt-3 w-full "
        (btnClicked)="cartService.addToCart(product())"
      ></app-button>

      <span
        class="absolute top-2 right-2 text-sm text-white p-2 rounded-xl shadow-md"
        [class]="product().stock ? 'bg-green-400' : 'bg-red-500'"
      >
        @if (product().stock) {
        {{ product().stock }} left } @else { Out of Stock }
      </span>
    </div>
  `,
  styles: ``,
})
export class ProductCard {
  cartService = inject(CartService);
  product = input.required<Product>();
}
