import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEquipeComponent } from './section-equipe.component';

describe('SectionEquipeComponent', () => {
  let component: SectionEquipeComponent;
  let fixture: ComponentFixture<SectionEquipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEquipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
