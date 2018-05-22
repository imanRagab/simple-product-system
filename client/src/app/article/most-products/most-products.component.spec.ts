import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostProductsComponent } from './most-products.component';

describe('MostProductsComponent', () => {
  let component: MostProductsComponent;
  let fixture: ComponentFixture<MostProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
