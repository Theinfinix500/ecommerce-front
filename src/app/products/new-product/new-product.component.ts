import { Component } from '@angular/core';
import { ProductForm } from '@models/product-form.model';
import { ProductsService } from '@services/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  picture!: File;

  constructor(private productsService: ProductsService) {}

  handleFile(event: any) {
    if (event.target.files[0]) {
      this.picture = event.target.files[0];
    }
  }

  onSubmit(product: ProductForm) {
    this.productsService
      .addProduct({ ...product, picture: this.picture })
      .subscribe();
  }
}
