import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWithTextComponent } from './cards-with-text.component';

describe('CardsWithTextComponent', () => {
  let component: CardsWithTextComponent;
  let fixture: ComponentFixture<CardsWithTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsWithTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
