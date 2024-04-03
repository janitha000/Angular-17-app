import { Route } from '@angular/router';
import { PhotoItemViewComponent } from './photo-item-view/photo-item-view.component';
import { PhotoGalleryComponent } from './photo-gallery.component';

export const PHOTO_GALLERY_ROUTES: Route[] = [
  {
    path: '',
    component: PhotoGalleryComponent,
  },
  {
    path: 'item',
    component: PhotoItemViewComponent,
  },
];
