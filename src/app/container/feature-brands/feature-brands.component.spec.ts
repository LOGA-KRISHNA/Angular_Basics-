import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBrandsComponent } from './feature-brands.component';

describe('FeatureBrandsComponent', () => {
  let component: FeatureBrandsComponent;
  let fixture: ComponentFixture<FeatureBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
