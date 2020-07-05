import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobiscrollPage } from './mobiscroll.page';

const routes: Routes = [
  {
    path: '',
    component: MobiscrollPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobiscrollPageRoutingModule {}
