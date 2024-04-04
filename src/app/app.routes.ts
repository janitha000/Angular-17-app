import { Routes } from '@angular/router';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'photo-gallery',
    data: {
      preload: true,
      delay: 1000,
    },
    loadChildren: () =>
      import('./pages/photo-gallery/photo-gallery.routes').then(
        (mod) => mod.PHOTO_GALLERY_ROUTES
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (mod) => mod.NotFoundComponent
      ),
  },
];
