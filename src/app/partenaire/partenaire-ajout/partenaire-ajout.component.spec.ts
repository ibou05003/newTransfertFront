import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireAjoutComponent } from './partenaire-ajout.component';

describe('PartenaireAjoutComponent', () => {
  let component: PartenaireAjoutComponent;
  let fixture: ComponentFixture<PartenaireAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenaireAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
