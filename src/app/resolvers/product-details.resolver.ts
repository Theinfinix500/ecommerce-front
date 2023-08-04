import { catchError, of } from 'rxjs';
import { inject } from '@angular/core';
import { ProductsService } from '@services/products.service';
import { ResolveFn } from '@angular/router';

export const productDetailsResolver: ResolveFn<any> = (route, state) => {
  const productsService: ProductsService = inject(ProductsService);
  const productId = route.paramMap.get('productId') as String;
  return productsService.getProduct(+productId).pipe(
    catchError((err) => {
      return of('No Data Found' + err);
    })
  );
};
