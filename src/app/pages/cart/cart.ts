import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service/cart.service';
import { CartItem } from '../../components/cart/cart-item/cart-item';
import { OrderSummary } from "../../components/cart/order-summary/order-summary";

@Component({
  selector: 'app-cart',
  imports: [CartItem, OrderSummary],
  template: `
    <div class="flex flex-col p-6 gap-4">
      <h2 class="text-2xl">Shopping Cart</h2>
      @for (item of cartService.cart(); track item.id) {
      <app-cart-item [item]="item" />
      }
      <app-order-summary />
    </div>
  `,
  styles: ``,
})
export class Cart {
  cartService = inject(CartService);
}
