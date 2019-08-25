import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireDetailsComponent } from './partenaire-details.component';

describe('PartenaireDetailsComponent', () => {
  let component: PartenaireDetailsComponent;
  let fixture: ComponentFixture<PartenaireDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenaireDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
