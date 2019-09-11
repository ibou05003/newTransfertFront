import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserAffectationComponent } from './list-user-affectation.component';

describe('ListUserAffectationComponent', () => {
  let component: ListUserAffectationComponent;
  let fixture: ComponentFixture<ListUserAffectationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserAffectationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserAffectationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
