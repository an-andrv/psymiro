import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

enum PageUrlEnum {
  dashboard = 'dashboard',
  profile = 'profile'
}

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: PageUrlEnum.profile, pathMatch: 'full' },
      { path: PageUrlEnum.profile, loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)},
      { path: PageUrlEnum.dashboard, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
