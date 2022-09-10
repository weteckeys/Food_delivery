import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllReviewsPage } from './all-reviews.page';

describe('AllReviewsPage', () => {
  let component: AllReviewsPage;
  let fixture: ComponentFixture<AllReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
