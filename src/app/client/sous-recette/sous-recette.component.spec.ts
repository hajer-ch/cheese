import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousRecetteComponent } from './sous-recette.component';

describe('SousRecetteComponent', () => {
  let component: SousRecetteComponent;
  let fixture: ComponentFixture<SousRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
