import { NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {UserRoutes} from './user.routes';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [
   ],
  bootstrap: []
})
export class UserModule {}
