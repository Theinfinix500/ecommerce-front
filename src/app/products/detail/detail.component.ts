import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.product$ = this.activeRoute.data.pipe(
      map((result) => result['product'] as Product)
    );
  }
}
