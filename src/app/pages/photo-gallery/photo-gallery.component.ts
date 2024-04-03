import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  standalone: true,
  imports: [],
  templateUrl: './photo-gallery.component.html',
  styleUrl: './photo-gallery.component.scss',
})
export class PhotoGalleryComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  onGalleryItemClick(galleryItem: string) {
    this.router.navigate([galleryItem], { relativeTo: this.route });
  }
}
