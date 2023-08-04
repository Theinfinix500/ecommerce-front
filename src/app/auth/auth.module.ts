import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  exports: [LoginComponent, AuthRoutingModule],
})
export class AuthModule {}
