import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersCollageComponent } from './careers-collage.component';

describe('CareersCollageComponent', () => {
  let component: CareersCollageComponent;
  let fixture: ComponentFixture<CareersCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareersCollageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareersCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
