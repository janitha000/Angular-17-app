import { TestBed } from '@angular/core/testing';

import { PhotoGalleryService } from './photo-gallery.service';

describe('PhotoGalleryService', () => {
  let service: PhotoGalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoGalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
