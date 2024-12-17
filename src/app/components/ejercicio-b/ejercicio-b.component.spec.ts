import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioBComponent } from './ejercicio-b.component';

describe('EjercicioBComponent', () => {
  let component: EjercicioBComponent;
  let fixture: ComponentFixture<EjercicioBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjercicioBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjercicioBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
