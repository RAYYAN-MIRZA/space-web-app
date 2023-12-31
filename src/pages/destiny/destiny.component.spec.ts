import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyComponent } from './destiny.component';

describe('DestinyComponent', () => {
  let component: DestinyComponent;
  let fixture: ComponentFixture<DestinyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinyComponent]
    });
    fixture = TestBed.createComponent(DestinyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
