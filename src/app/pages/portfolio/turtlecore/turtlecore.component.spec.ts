import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtlecoreComponent } from './turtlecore.component';

describe('TurtlecoreComponent', () => {
  let component: TurtlecoreComponent;
  let fixture: ComponentFixture<TurtlecoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurtlecoreComponent]
    });
    fixture = TestBed.createComponent(TurtlecoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
