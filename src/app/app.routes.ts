import { Routes } from '@angular/router';
import { PhotoGalleryComponent } from './pages/photo-gallery/photo-gallery.component';

export const routes: Routes = [
  // {
  //   path: 'photo-gallery',
  //   loadComponent: () =>
  //     import('./pages/photo-gallery/photo-gallery.component').then(
  //       (mod) => mod.PhotoGalleryComponent
  //     ),
  // },
  {
    path: 'photo-gallery',
    loadChildren: () =>
      import('./pages/photo-gallery/photo-gallery.routes').then(
        (mod) => mod.PHOTO_GALLERY_ROUTES
      ),
  },
];
