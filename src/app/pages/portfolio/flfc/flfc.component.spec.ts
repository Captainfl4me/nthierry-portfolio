import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FlfcComponent } from './flfc.component';

describe('FlfcComponent', () => {
  let component: FlfcComponent;
  let fixture: ComponentFixture<FlfcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
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
