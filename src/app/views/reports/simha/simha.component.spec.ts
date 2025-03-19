import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimhaComponent } from './simha.component';

describe('SimhaComponent', () => {
  let component: SimhaComponent;
  let fixture: ComponentFixture<SimhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimhaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
