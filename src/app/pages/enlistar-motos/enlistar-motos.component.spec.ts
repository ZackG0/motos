import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnlistarMotosComponent } from './enlistar-motos.component';

describe('EnlistarMotosComponent', () => {
  let component: EnlistarMotosComponent;
  let fixture: ComponentFixture<EnlistarMotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnlistarMotosComponent]
    });
    fixture = TestBed.createComponent(EnlistarMotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
