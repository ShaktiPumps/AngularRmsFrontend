import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpavrikshagridComponent } from './kalpavrikshagrid.component';

describe('KalpavrikshagridComponent', () => {
  let component: KalpavrikshagridComponent;
  let fixture: ComponentFixture<KalpavrikshagridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalpavrikshagridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KalpavrikshagridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
