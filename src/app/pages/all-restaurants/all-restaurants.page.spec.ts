import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllRestaurantsPage } from './all-restaurants.page';

describe('AllRestaurantsPage', () => {
  let component: AllRestaurantsPage;
  let fixture: ComponentFixture<AllRestaurantsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRestaurantsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllRestaurantsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
