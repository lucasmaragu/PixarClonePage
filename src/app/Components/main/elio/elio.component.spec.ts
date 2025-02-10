import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElioComponent } from './elio.component';

describe('ElioComponent', () => {
  let component: ElioComponent;
  let fixture: ComponentFixture<ElioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
