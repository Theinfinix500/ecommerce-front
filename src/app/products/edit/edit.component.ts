import { ProductsService } from '@services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from '@models/product.model';
import { ProductForm } from '@models/product-form.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(
    private activeRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$ = this.activeRoute.data.pipe(
      map((result) => result['product'] as Product)
    );
  }

  onSubmit(product: ProductForm) {
    this.productsService.editProduct(product).subscribe();
  }
}
