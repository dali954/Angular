import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborateursListComponent } from './collaborateurs-list.component';

describe('CollaborateursListComponent', () => {
  let component: CollaborateursListComponent;
  let fixture: ComponentFixture<CollaborateursListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborateursListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborateursListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
