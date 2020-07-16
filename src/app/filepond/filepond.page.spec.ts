import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilepondPage } from './filepond.page';

describe('FilepondPage', () => {
  let component: FilepondPage;
  let fixture: ComponentFixture<FilepondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilepondPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilepondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
