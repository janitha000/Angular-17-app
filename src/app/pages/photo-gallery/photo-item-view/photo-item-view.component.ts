import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-photo-item-view',
  standalone: true,
  imports: [],
  templateUrl: './photo-item-view.component.html',
  styleUrl: './photo-item-view.component.scss',
})
export class PhotoItemViewComponent {
  photoId!: string;
  @Input()
  set id(id: string) {
    this.photoId = id;
  }
}
