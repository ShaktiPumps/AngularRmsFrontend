import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpavrikshaComponent } from './kalpavriksha.component';

describe('KalpavrikshaComponent', () => {
  let component: KalpavrikshaComponent;
  let fixture: ComponentFixture<KalpavrikshaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalpavrikshaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KalpavrikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
