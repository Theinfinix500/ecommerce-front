import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { productDetailsResolver } from '../resolvers/product-details.resolver';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      { path: '', component: ListComponent },
      {
        path: 'detail/:productId',
        component: DetailComponent,
        resolve: {
          product: productDetailsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
