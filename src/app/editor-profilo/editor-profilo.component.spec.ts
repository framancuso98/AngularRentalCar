import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorProfiloComponent } from './editor-profilo.component';

describe('EditorProfiloComponent', () => {
  let component: EditorProfiloComponent;
  let fixture: ComponentFixture<EditorProfiloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorProfiloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
