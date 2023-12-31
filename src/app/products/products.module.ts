import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { HasRoleDirective } from '@shared/directives/has-role.directive';
import { EditComponent } from './edit/edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [ProductsComponent, DetailComponent, ListComponent, EditComponent, ProductFormComponent, NewProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LazyLoadImageModule,
    MatIconModule,
    MatButtonModule,
    SharedModule,
    HasRoleDirective,
    FormsModule
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class ProductsModule {}
