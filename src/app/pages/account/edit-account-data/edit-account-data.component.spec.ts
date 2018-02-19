import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountDataComponent } from './edit-account-data.component';

describe('EditAccountDataComponent', () => {
  let component: EditAccountDataComponent;
  let fixture: ComponentFixture<EditAccountDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
