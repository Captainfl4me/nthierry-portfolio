import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TurtlecoreComponent } from './turtlecore.component';

describe('TurtlecoreComponent', () => {
  let component: TurtlecoreComponent;
  let fixture: ComponentFixture<TurtlecoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
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
