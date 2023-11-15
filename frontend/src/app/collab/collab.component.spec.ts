import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabComponent } from './collab.component';

describe('CollabComponent', () => {
  let component: CollabComponent;
  let fixture: ComponentFixture<CollabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollabComponent]
    });
    fixture = TestBed.createComponent(CollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
