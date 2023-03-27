import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

enum PageUrlEnum {
  dashboard = 'dashboard'
}

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: PageUrlEnum.dashboard, pathMatch: 'full' },
      { path: PageUrlEnum.dashboard, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
