import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCarouselTwoComponent } from './cards-carousel-two.component';

describe('CardsCarouselTwoComponent', () => {
  let component: CardsCarouselTwoComponent;
  let fixture: ComponentFixture<CardsCarouselTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsCarouselTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsCarouselTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
