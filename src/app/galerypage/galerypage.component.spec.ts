import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerypageComponent } from './galerypage.component';

describe('GalerypageComponent', () => {
  let component: GalerypageComponent;
  let fixture: ComponentFixture<GalerypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalerypageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalerypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
