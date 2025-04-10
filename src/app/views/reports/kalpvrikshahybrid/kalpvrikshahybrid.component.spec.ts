import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KalpvrikshahybridComponent } from './kalpvrikshahybrid.component';

describe('KalpvrikshahybridComponent', () => {
  let component: KalpvrikshahybridComponent;
  let fixture: ComponentFixture<KalpvrikshahybridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KalpvrikshahybridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KalpvrikshahybridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
