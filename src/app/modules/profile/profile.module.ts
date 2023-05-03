import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile.routing';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/material.module';



@NgModule({
  declarations: [
    ProfileComponent,
    UserComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  bootstrap: [ProfileComponent]
})
export class ProfileModule { }
