import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { CwebserverComponent } from './cwebserver.component';

describe('CwebserverComponent', () => {
  let component: CwebserverComponent;
  let fixture: ComponentFixture<CwebserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
      declarations: [CwebserverComponent]
    });
    fixture = TestBed.createComponent(CwebserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
