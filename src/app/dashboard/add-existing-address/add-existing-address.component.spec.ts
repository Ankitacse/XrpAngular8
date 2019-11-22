import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExistingAddressComponent } from './add-existing-address.component';

describe('AddExistingAddressComponent', () => {
  let component: AddExistingAddressComponent;
  let fixture: ComponentFixture<AddExistingAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExistingAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExistingAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
