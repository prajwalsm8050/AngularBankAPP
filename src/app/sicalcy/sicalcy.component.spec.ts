import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SicalcyComponent } from './sicalcy.component';

describe('SicalcyComponent', () => {
  let component: SicalcyComponent;
  let fixture: ComponentFixture<SicalcyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SicalcyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SicalcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
