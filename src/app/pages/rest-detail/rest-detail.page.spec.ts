import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestDetailPage } from './rest-detail.page';

describe('RestDetailPage', () => {
  let component: RestDetailPage;
  let fixture: ComponentFixture<RestDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
