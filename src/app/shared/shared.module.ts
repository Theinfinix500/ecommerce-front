import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    FooterComponent,
    SideBarComponent,
  ],
  imports: [CommonModule],
  exports: [
    LayoutComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
  ],
})
export class SharedModule {}
