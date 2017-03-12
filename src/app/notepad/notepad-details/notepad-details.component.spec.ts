import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepadDetailsComponent } from './notepad-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NotepadService } from '../services/notepad.service';

describe('NotepadDetailsComponent', () => {
  let component: NotepadDetailsComponent;
  let fixture: ComponentFixture<NotepadDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotepadDetailsComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        NotepadService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotepadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
