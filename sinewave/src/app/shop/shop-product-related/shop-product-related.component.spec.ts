import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProductRelatedComponent } from './shop-product-related.component';

describe('ShopProductRelatedComponent', () => {
  let component: ShopProductRelatedComponent;
  let fixture: ComponentFixture<ShopProductRelatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProductRelatedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProductRelatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
