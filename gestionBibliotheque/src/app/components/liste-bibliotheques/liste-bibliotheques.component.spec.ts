import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeBibliothequesComponent } from './liste-bibliotheques.component';

describe('ListeBibliothequesComponent', () => {
  let component: ListeBibliothequesComponent;
  let fixture: ComponentFixture<ListeBibliothequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeBibliothequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeBibliothequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
