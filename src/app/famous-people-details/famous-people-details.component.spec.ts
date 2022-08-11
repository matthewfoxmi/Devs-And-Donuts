import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamousPeopleDetailsComponent } from './famous-people-details.component';

describe('FamousPeopleDetailsComponent', () => {
  let component: FamousPeopleDetailsComponent;
  let fixture: ComponentFixture<FamousPeopleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamousPeopleDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamousPeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
