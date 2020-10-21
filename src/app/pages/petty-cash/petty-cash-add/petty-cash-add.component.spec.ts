import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PettyCashAddComponent } from './petty-cash-add.component';

describe('PettyCashAddComponent', () => {
  let component: PettyCashAddComponent;
  let fixture: ComponentFixture<PettyCashAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PettyCashAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PettyCashAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
