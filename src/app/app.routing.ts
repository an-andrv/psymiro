import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './components/start-page/start-page.component';
import { PageUrlEnum } from './shared/models/urls.enum';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: StartPageComponent, pathMatch: 'full' },
      { path: PageUrlEnum.profile, loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule) },
      { path: PageUrlEnum.dashboard, loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
