import { Component, inject, signal } from '@angular/core';
import { Button } from '../button/button';
import { CartService } from '../../services/cart-service/cart.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [Button, RouterLink],
  template: ` <div class="bg-slate-200 px-4 py-3 shadow-md flex justify-between items-center">
    <button routerLink="/">{{ title() }}</button>
    <app-button
      [label]="label()"
      (btnClicked)="showBtnClick()"
      routerLink="/cart"
    ></app-button>
  </div>`,
  styles: ``,
})
export class Header {
  title = signal<string>('Ecommerce APP');

  cartService = inject(CartService);

  label() {
    return "Cart (" + this.cartService.cart().length + ")"
  }
  showBtnClick() {}
}
