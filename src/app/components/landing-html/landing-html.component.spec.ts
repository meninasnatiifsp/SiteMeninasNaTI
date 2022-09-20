import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingHtmlComponent } from './landing-html.component';

describe('LandingHtmlComponent', () => {
  let component: LandingHtmlComponent;
  let fixture: ComponentFixture<LandingHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingHtmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
