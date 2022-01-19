import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterBibliothequeComponent } from './ajouter-bibliotheque.component';

describe('AjouterBibliothequeComponent', () => {
  let component: AjouterBibliothequeComponent;
  let fixture: ComponentFixture<AjouterBibliothequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterBibliothequeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterBibliothequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
