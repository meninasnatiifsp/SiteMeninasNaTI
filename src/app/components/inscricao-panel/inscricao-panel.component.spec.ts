import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoPanelComponent } from './inscricao-panel.component';

describe('InscricaoPanelComponent', () => {
  let component: InscricaoPanelComponent;
  let fixture: ComponentFixture<InscricaoPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscricaoPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscricaoPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
