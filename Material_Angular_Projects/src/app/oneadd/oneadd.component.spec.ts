import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneaddComponent } from './oneadd.component';

describe('OneaddComponent', () => {
  let component: OneaddComponent;
  let fixture: ComponentFixture<OneaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
