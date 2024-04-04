import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SPALASH_ACCESS_KEY_TOKEN } from '../../tokens';
import { SPALASH_ACCESS_KEY } from '../../../../enviornment';
import { PhotoGalleryService } from './photo-gallery.service';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss',
  providers: [
    {
      provide: SPALASH_ACCESS_KEY_TOKEN,
      useValue: SPALASH_ACCESS_KEY,
    },
    PhotoGalleryService,
  ],
})
export class PhotoGalleryComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private photoGalleryService: PhotoGalleryService
  ) {
    this.photoGalleryService.getPhotos();
  }

  onGalleryItemClick(galleryItem: string) {
    this.router.navigate([galleryItem], { relativeTo: this.route });
  }
}
