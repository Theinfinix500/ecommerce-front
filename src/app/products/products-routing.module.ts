import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { productDetailsResolver } from '../resolvers/product-details.resolver';
import { EditComponent } from './edit/edit.component';
import { hasRoleGuard } from '../auth/guards/has-role.guard';
import { NewProductComponent } from './new-product/new-product.component';

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
      {
        path: 'edit/:productId',
        component: EditComponent,
        canActivate: [hasRoleGuard],
        data: {
          role: ['Admin'],
        },
        resolve: {
          product: productDetailsResolver,
        },
      },
      {
        path: 'new',
        component: NewProductComponent,
        canActivate: [hasRoleGuard],
        data: {
          role: ['Admin'],
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
