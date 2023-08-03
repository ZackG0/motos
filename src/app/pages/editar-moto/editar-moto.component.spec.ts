import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMotoComponent } from './editar-moto.component';

describe('EditarAutoComponent', () => {
  let component: EditarMotoComponent;
  let fixture: ComponentFixture<EditarMotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarMotoComponent]
    });
    fixture = TestBed.createComponent(EditarMotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
