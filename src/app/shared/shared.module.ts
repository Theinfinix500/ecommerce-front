import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { QuantityComponent } from './components/quantity/quantity.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
    QuantityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
  ],
  exports: [
    LayoutComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    QuantityComponent,
  ],
})
export class SharedModule {}
