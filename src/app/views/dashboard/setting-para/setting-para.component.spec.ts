import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingParaComponent } from './setting-para.component';

describe('SettingParaComponent', () => {
  let component: SettingParaComponent;
  let fixture: ComponentFixture<SettingParaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingParaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SettingParaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
