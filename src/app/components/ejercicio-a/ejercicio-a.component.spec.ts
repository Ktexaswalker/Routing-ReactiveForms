import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioAComponent } from './ejercicio-a.component';

describe('EjercicioAComponent', () => {
  let component: EjercicioAComponent;
  let fixture: ComponentFixture<EjercicioAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
