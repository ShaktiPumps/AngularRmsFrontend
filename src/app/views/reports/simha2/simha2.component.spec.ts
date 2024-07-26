import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simha2Component } from './simha2.component';

describe('Simha2Component', () => {
  let component: Simha2Component;
  let fixture: ComponentFixture<Simha2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simha2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Simha2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
