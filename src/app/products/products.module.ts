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

@NgModule({
  declarations: [ProductsComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LazyLoadImageModule,
    MatIconModule,
    SharedModule,
  ],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class ProductsModule {}
