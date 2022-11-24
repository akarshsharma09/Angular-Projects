import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkarshComponent } from './akarsh.component';

describe('AkarshComponent', () => {
  let component: AkarshComponent;
  let fixture: ComponentFixture<AkarshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkarshComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkarshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
