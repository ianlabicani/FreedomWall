import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTogglerComponent } from './modal-toggler.component';

describe('ModalTogglerComponent', () => {
  let component: ModalTogglerComponent;
  let fixture: ComponentFixture<ModalTogglerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTogglerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
