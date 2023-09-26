import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlfcComponent } from './flfc.component';

describe('FlfcComponent', () => {
  let component: FlfcComponent;
  let fixture: ComponentFixture<FlfcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlfcComponent]
    });
    fixture = TestBed.createComponent(FlfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
