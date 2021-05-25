import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'filepond',
    pathMatch: 'full'
  },
  {
    path: 'mobiscroll',
    loadChildren: () => import('./mobiscroll/mobiscroll.module').then( m => m.MobiscrollPageModule)
  },
  {
    path: 'filepond',
    loadChildren: () => import('./filepond/filepond.module').then( m => m.FilepondPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
