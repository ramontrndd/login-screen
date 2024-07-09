import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullComponent } from './full.component';

describe('FullcomponentComponent', () => {
  let component: FullComponent;
  let fixture: ComponentFixture<FullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FullComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
