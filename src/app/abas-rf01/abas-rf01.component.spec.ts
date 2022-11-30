import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABASRF01Component } from './abas-rf01.component';

describe('ABASRF01Component', () => {
  let component: ABASRF01Component;
  let fixture: ComponentFixture<ABASRF01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ABASRF01Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ABASRF01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
