import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstParticipantesComponent } from './inst-participantes.component';

describe('InstParticipantesComponent', () => {
  let component: InstParticipantesComponent;
  let fixture: ComponentFixture<InstParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstParticipantesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
