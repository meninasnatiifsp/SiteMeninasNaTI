import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerLandingComponent } from './divider-landing.component';

describe('DividerLandingComponent', () => {
  let component: DividerLandingComponent;
  let fixture: ComponentFixture<DividerLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DividerLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
