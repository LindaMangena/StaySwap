import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListYourApartmentComponent } from './list-your-apartment.component';

describe('ListYourApartmentComponent', () => {
  let component: ListYourApartmentComponent;
  let fixture: ComponentFixture<ListYourApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListYourApartmentComponent]
    });
    fixture = TestBed.createComponent(ListYourApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
