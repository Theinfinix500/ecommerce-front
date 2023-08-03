import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { StrapiResponse } from '@models/strapi-response-data.model';
import { Product } from '@models/product.model';
import { BACKEND_URL } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    private http: HttpClient,
    @Inject(BACKEND_URL) private BACKEND_URL: string
  ) {}

  getProducts() {
    return this.http
      .get<StrapiResponse<Product[]>>(
        `${this.BACKEND_URL}/api/products?populate=*`
      )
      .pipe(
        map(({ data }) =>
          data.map((product) => ({
            ...product,
            picture: {
              ...product.picture,
              url: `${this.BACKEND_URL}${product.picture.url}`,
              formats: {
                ...product.picture.formats,
                thumbnail: {
                  ...product.picture.formats.thumbnail,
                  url: `${this.BACKEND_URL}${product.picture.formats.thumbnail.url}`,
                },
              },
            },
          }))
        )
      );
  }
}
