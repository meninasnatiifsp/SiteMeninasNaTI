import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionParticiparComponent } from './section-participar.component';

describe('SectionParticiparComponent', () => {
  let component: SectionParticiparComponent;
  let fixture: ComponentFixture<SectionParticiparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionParticiparComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionParticiparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
