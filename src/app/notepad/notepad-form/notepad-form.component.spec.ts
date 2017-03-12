import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadFormComponent } from './notepad-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotepadService } from '../services/notepad.service';

describe('NotepadFormComponent', () => {
  let component: NotepadFormComponent;
  let fixture: ComponentFixture<NotepadFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [
        NotepadService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
