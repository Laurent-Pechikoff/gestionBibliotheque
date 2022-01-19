import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheBibliothequeComponent } from './recherche-bibliotheque.component';

describe('RechercheBibliothequeComponent', () => {
  let component: RechercheBibliothequeComponent;
  let fixture: ComponentFixture<RechercheBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheBibliothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
