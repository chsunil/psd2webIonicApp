import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'wordpress',
    loadChildren: () => import('./wordpress/wordpress.module').then(m => m.WordpressPageModule)
  },
  {
    path: 'wordpress-category',
    loadChildren: './wordpress/wordpress-category/wordpress-category.module#WordpressCategoryPageModule'
  },
  {
    path: 'wordpress-posts',
    loadChildren: './wordpress/wordpress-posts/wordpress-posts.module#WordpressPostsPageModule'
  },
  {
    path: 'wordpress-detail',
    loadChildren: './wordpress/wordpress-detail/wordpress-detail.module#WordpressDetailPageModule'
  },
  {
    path: 'wordpress-favorite',
    loadChildren: './wordpress/wordpress-favorite/wordpress-favorite.module#WordpressFavoritePageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
