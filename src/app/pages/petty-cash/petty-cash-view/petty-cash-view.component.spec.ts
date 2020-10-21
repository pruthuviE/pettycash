import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashViewComponent } from './petty-cash-view.component';

describe('PettyCashViewComponent', () => {
  let component: PettyCashViewComponent;
  let fixture: ComponentFixture<PettyCashViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettyCashViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
