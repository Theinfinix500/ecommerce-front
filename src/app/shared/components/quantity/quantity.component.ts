import { Component } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss'],
})
export class QuantityComponent {
  qty: number = 1;

  addQty() {
    this.qty = Number(this.qty) + 1;
  }

  reduceQty() {
    if (this.qty <= 0) {
      this.qty = 1;
    } else this.qty = Number(this.qty) - 1;
  }

  resetValueIfEmpty(value: string) {
    if (!value) this.qty = 1;
  }
}
