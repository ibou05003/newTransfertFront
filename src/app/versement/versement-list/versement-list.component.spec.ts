import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementListComponent } from './versement-list.component';

describe('VersementListComponent', () => {
  let component: VersementListComponent;
  let fixture: ComponentFixture<VersementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
