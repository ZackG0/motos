import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMotoComponent } from './crear-moto.component';

describe('CrearMotoComponent', () => {
  let component: CrearMotoComponent;
  let fixture: ComponentFixture<CrearMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearMotoComponent]
    });
    fixture = TestBed.createComponent(CrearMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
