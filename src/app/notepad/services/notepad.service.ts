import { notepads } from '../notepad.mocks';
import { Notepad } from '../notepad.model';

export class NotepadService {

  getNotepads(): Promise<Notepad[]> {
    return Promise.resolve(notepads);
  }

  addNote(note) {
    notepads.push(note);
  }

  getNotepad(id) {
    return this.getNotepads()
      .then((notepads) => {
        return notepads.find((notepad) => {
          return notepad.id === id;
        });
      });
  }
}
