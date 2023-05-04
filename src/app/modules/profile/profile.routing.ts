import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUrlEnum } from '../../shared/models/urls.enum';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserComponent } from './components/user/user.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: '', component: ProfileComponent
  },
  {
    path: PageUrlEnum.user, component: UserComponent
  },
  {
    path: PageUrlEnum.login, component: LoginComponent
  },
  {
    path: PageUrlEnum.signup, component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
