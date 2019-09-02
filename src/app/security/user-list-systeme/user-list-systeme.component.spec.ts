import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListSystemeComponent } from './user-list-systeme.component';

describe('UserListSystemeComponent', () => {
  let component: UserListSystemeComponent;
  let fixture: ComponentFixture<UserListSystemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListSystemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListSystemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
