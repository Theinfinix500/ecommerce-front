import { Product } from '@models/product.model';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  @Input() productData!: Product;
  @Output('submitForm') submit = new EventEmitter();

  productForm = {
    id: -1,
    title: '',
    description: '',
    price: 0,
  };

  ngOnInit(): void {
    if (this.productData) {
      const { description, title, price, id } = this.productData;
      this.productForm = {
        description,
        title,
        price,
        id,
      };
    }
  }

  onSubmit() {
    this.submit.emit(this.productForm);
  }
}
