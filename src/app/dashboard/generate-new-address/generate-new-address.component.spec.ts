import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateNewAddressComponent } from './generate-new-address.component';

describe('GenerateNewAddressComponent', () => {
  let component: GenerateNewAddressComponent;
  let fixture: ComponentFixture<GenerateNewAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateNewAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateNewAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
