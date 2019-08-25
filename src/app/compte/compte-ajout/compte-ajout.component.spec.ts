import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteAjoutComponent } from './compte-ajout.component';

describe('CompteAjoutComponent', () => {
  let component: CompteAjoutComponent;
  let fixture: ComponentFixture<CompteAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
