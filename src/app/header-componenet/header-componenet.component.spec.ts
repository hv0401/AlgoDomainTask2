import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponenetComponent } from './header-componenet.component';

describe('HeaderComponenetComponent', () => {
  let component: HeaderComponenetComponent;
  let fixture: ComponentFixture<HeaderComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
