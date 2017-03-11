import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { NotepadService } from '../services/notepad.service';
import { Notepad } from '../notepad.model';

@Component({
  selector: 'app-notepad-details',
  templateUrl: './notepad-details.component.html',
  styleUrls: ['./notepad-details.component.css']
})
export class NotepadDetailsComponent implements OnInit {
  notepad: Notepad;

  constructor(
    private router: ActivatedRoute,
    private location: Location,
    private notepadService: NotepadService
  ) { }

  ngOnInit() {
    console.log('Init');
    this.router.params.forEach((params: Params) => {
      new Notepad(0, '', '', 0, '');
      const id = +params['id'];
      this.notepadService.getNotepad(id).
        then((notepad) => { this.notepad = notepad; });
    });
  }

}
