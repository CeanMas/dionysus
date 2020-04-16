import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsPage } from './sections.page';

const routes: Routes = [
  {
    path: 'sections',
    component: SectionsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'fav',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../favorite/favorite.module').then(m => m.FavoritePageModule)
          }
        ]
      },
      {
        path: 'lei',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../lei/lei.module').then(m => m.LeiPageModule)
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../info/info.module').then(m => m.InfoPageModule)
          }
        ]
      },
      {
        path: 'promos',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../promotions/promotions.module').then(m => m.PromotionsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/sections/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/sections/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsPageRoutingModule {}
