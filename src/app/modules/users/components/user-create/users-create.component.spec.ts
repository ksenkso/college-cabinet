import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateComponent } from './student-create.component';

describe('UserCreateComponent', () => {
  let component: UserCreateComponent;
  let fixture: ComponentFixture<UserCreateComponent>;

  beforeEach(async(() => {
    //noinspection JSIgnoredPromiseFromCall
    TestBed.configureTestingModule({
      declarations: [ UserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
