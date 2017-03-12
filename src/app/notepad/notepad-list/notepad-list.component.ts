import { Component, OnInit } from '@angular/core';
import { Notepad } from '../notepad.model';
import { NotepadService } from '../services/notepad.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-notepad-list',
  templateUrl: './notepad-list.component.html',
  styleUrls: ['./notepad-list.component.css']
})
export class NotepadListComponent implements OnInit {
  notepads: Notepad[];
  notepadFilter: any = { title: '' };

  constructor(private notepadService: NotepadService) { }

  ngOnInit() {
    this.notepadService.getNotepads()
      .then((notepads) => this.notepads = notepads);

  }

}
