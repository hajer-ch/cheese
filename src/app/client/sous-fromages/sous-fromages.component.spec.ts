import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SousFromagesComponent } from './sous-fromages.component';

describe('SousFromagesComponent', () => {
  let component: SousFromagesComponent;
  let fixture: ComponentFixture<SousFromagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SousFromagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SousFromagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
