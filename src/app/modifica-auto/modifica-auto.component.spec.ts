import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaAutoComponent } from './modifica-auto.component';

describe('ModificaAutoComponent', () => {
  let component: ModificaAutoComponent;
  let fixture: ComponentFixture<ModificaAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
