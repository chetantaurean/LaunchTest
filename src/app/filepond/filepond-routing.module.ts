import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilepondPage } from './filepond.page';

const routes: Routes = [
  {
    path: '',
    component: FilepondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilepondPageRoutingModule {}
