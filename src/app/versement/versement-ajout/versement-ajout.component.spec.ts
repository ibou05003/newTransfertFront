import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersementAjoutComponent } from './versement-ajout.component';

describe('VersementAjoutComponent', () => {
  let component: VersementAjoutComponent;
  let fixture: ComponentFixture<VersementAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersementAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersementAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
