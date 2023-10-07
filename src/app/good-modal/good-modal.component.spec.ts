import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodModalComponent } from './good-modal.component';

describe('GoodModalComponent', () => {
  let component: GoodModalComponent;
  let fixture: ComponentFixture<GoodModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoodModalComponent]
    });
    fixture = TestBed.createComponent(GoodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
