import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPhotoListPage } from './all-photo-list.page';

describe('AllPhotoListPage', () => {
  let component: AllPhotoListPage;
  let fixture: ComponentFixture<AllPhotoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPhotoListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPhotoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
