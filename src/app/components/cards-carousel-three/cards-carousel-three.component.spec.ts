import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarouselThreeComponent } from './cards-carousel-three.component';

describe('CardsCarouselThreeComponent', () => {
  let component: CardsCarouselThreeComponent;
  let fixture: ComponentFixture<CardsCarouselThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCarouselThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCarouselThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
