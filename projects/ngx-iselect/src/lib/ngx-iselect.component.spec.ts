import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIselectComponent } from './ngx-iselect.component';

describe('NgxIselectComponent', () => {
  let component: NgxIselectComponent;
  let fixture: ComponentFixture<NgxIselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxIselectComponent]
    });
    fixture = TestBed.createComponent(NgxIselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
