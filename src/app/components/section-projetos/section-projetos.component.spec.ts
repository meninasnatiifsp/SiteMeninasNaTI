import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProjetosComponent } from './section-projetos.component';

describe('SectionProjetosComponent', () => {
  let component: SectionProjetosComponent;
  let fixture: ComponentFixture<SectionProjetosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionProjetosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
