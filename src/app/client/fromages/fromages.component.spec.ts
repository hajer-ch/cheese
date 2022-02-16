import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromagesComponent } from './fromages.component';

describe('FromagesComponent', () => {
  let component: FromagesComponent;
  let fixture: ComponentFixture<FromagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
