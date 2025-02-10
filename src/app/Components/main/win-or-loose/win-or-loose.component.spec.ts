import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinOrLooseComponent } from './win-or-loose.component';

describe('WinOrLooseComponent', () => {
  let component: WinOrLooseComponent;
  let fixture: ComponentFixture<WinOrLooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinOrLooseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinOrLooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
