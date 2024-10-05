import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarchartNgComponent } from './barchart-ng.component';

describe('BarchartNgComponent', () => {
  let component: BarchartNgComponent;
  let fixture: ComponentFixture<BarchartNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarchartNgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarchartNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
