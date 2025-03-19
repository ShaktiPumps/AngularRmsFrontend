import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunShaktiComponent } from './sun-shakti.component';

describe('SunShaktiComponent', () => {
  let component: SunShaktiComponent;
  let fixture: ComponentFixture<SunShaktiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunShaktiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SunShaktiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
