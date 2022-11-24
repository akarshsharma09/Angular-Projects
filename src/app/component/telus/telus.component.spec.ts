import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelusComponent } from './telus.component';

describe('TelusComponent', () => {
  let component: TelusComponent;
  let fixture: ComponentFixture<TelusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
