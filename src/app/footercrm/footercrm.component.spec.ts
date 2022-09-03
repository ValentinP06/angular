import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootercrmComponent } from './footercrm.component';

describe('FootercrmComponent', () => {
  let component: FootercrmComponent;
  let fixture: ComponentFixture<FootercrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootercrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootercrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
