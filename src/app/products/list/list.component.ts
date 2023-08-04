import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '@services/products.service';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  products!: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
