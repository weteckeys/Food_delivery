import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPhotosPage } from './all-photos.page';

describe('AllPhotosPage', () => {
  let component: AllPhotosPage;
  let fixture: ComponentFixture<AllPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
