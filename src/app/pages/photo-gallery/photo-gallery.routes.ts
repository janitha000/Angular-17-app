import { Route } from '@angular/router';
import { PhotoItemViewComponent } from './photo-item-view/photo-item-view.component';
import { PhotoGalleryComponent } from './photo-gallery.component';

export const PHOTO_GALLERY_ROUTES: Route[] = [
  {
    path: '',
    component: PhotoGalleryComponent,
    title: 'Photo Gallery',
  },
  {
    path: ':id',
    component: PhotoItemViewComponent,
    title: 'Photo Item',
  },
];
