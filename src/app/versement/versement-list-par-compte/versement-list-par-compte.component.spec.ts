import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementListParCompteComponent } from './versement-list-par-compte.component';

describe('VersementListParCompteComponent', () => {
  let component: VersementListParCompteComponent;
  let fixture: ComponentFixture<VersementListParCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementListParCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementListParCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
