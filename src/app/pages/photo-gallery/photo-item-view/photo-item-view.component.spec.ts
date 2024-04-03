import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoItemViewComponent } from './photo-item-view.component';

describe('PhotoItemViewComponent', () => {
  let component: PhotoItemViewComponent;
  let fixture: ComponentFixture<PhotoItemViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoItemViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhotoItemViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
