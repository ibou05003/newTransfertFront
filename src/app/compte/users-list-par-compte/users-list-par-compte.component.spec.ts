import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListParCompteComponent } from './users-list-par-compte.component';

describe('UsersListParCompteComponent', () => {
  let component: UsersListParCompteComponent;
  let fixture: ComponentFixture<UsersListParCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersListParCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListParCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
