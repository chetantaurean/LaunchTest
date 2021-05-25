import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobiscrollPage } from './mobiscroll.page';

describe('MobiscrollPage', () => {
  let component: MobiscrollPage;
  let fixture: ComponentFixture<MobiscrollPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobiscrollPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobiscrollPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
