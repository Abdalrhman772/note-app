import { Component } from '@angular/core';
import { Note } from 'src/app/model/note';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css'],
})
export class NoteAddComponent {
  newContent: string = '';

  constructor(private noteService: NoteService) {}

  addNewNote() {
    if (this.newContent.trim() !== '') {
      let note: Note = {
        id: Date.now(),
        content: this.newContent,
      };
      this.noteService.addNewNote(note);
      this.newContent = '';
    }
  }
}
