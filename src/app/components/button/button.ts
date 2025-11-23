import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: ` <button
    class="bg-blue-400 rounded-lg py-3 px-5 text-white cursor-pointer w-full"
    (click)="handleBtnClick()"
  >
    {{ label() }}
  </button>`,
  styles: ``,
})
export class Button {
  label = input('');
  btnClicked = output();
  handleBtnClick() {
    this.btnClicked.emit();
  }
}
