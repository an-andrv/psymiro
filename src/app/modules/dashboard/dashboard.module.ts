import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dasboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: '**',
    component: DashboardComponent,
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
