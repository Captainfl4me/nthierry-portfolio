import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwebserverComponent } from './cwebserver.component';

describe('CwebserverComponent', () => {
  let component: CwebserverComponent;
  let fixture: ComponentFixture<CwebserverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
