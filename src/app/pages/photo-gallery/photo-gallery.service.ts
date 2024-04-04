import { Inject, Injectable } from '@angular/core';
import { SPALASH_ACCESS_KEY_TOKEN } from '../../tokens';

@Injectable()
export class PhotoGalleryService {
  constructor(@Inject(SPALASH_ACCESS_KEY_TOKEN) private accessKey: string) {}

  getPhotos() {
    console.log(this.accessKey);
  }
}
