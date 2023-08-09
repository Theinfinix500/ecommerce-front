import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { StrapiResponse } from '@models/strapi-response-data.model';
import { Product } from '@models/product.model';
import { BACKEND_URL } from '../app.module';
import { ProductForm } from '@models/product-form.model';
import { Picture } from '@models/picture.model';

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
            picture: product.picture
              ? {
                  ...product.picture,
                  url: `${this.BACKEND_URL}${product.picture.url}`,
                  formats: {
                    ...product.picture.formats,
                    thumbnail: {
                      ...product.picture.formats.thumbnail,
                      url: `${this.BACKEND_URL}${product.picture.formats.thumbnail.url}`,
                    },
                  },
                }
              : ({} as Picture),
          }))
        )
      );
  }

  getProduct(productId: number) {
    return this.http
      .get<StrapiResponse<Product>>(
        `${this.BACKEND_URL}/api/products/${productId}?populate=*`
      )
      .pipe(
        map(({ data: product }) => ({
          ...product,
          picture: product.picture
            ? {
                ...product.picture,
                url: `${this.BACKEND_URL}${product.picture.url}`,
                formats: {
                  ...product.picture.formats,
                  thumbnail: {
                    ...product.picture.formats.thumbnail,
                    url: `${this.BACKEND_URL}${product.picture.formats.thumbnail.url}`,
                  },
                },
              }
            : ({} as Picture),
        }))
      );
  }

  addProduct({ id, picture, ...product }: ProductForm) {
    const data = { ...product };

    const formData = new FormData();
    formData.append('data', JSON.stringify(data)),
      formData.append('files.picture', picture, picture?.name);

    return this.http.post(`${this.BACKEND_URL}/api/products`, formData);
  }

  editProduct({ id, ...product }: ProductForm) {
    return this.http.put(`${this.BACKEND_URL}/api/products/${id}`, {
      data: { ...product },
    });
  }
}
