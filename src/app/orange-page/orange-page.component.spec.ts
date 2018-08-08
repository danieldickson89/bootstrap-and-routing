import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrangePageComponent } from './orange-page.component';

describe('OrangePageComponent', () => {
  let component: OrangePageComponent;
  let fixture: ComponentFixture<OrangePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrangePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
