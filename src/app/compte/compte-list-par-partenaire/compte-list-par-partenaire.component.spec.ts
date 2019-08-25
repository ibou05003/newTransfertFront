import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteListParPartenaireComponent } from './compte-list-par-partenaire.component';

describe('CompteListParPartenaireComponent', () => {
  let component: CompteListParPartenaireComponent;
  let fixture: ComponentFixture<CompteListParPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteListParPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteListParPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
