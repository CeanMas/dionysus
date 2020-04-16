import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeiPage } from './lei.page';

const routes: Routes = [
  {
    path: '',
    component: LeiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeiPageRoutingModule {}
