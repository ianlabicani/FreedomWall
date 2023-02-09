import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
import { NoteComponent } from './components/notes/note/note.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalTogglerComponent } from './components/modal/modal-toggler/modal-toggler.component';
import { CreateNoteComponent } from './components/notes/create-note/create-note.component';
import { FilterNoteComponent } from './components/notes/filter-note/filter-note.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    NoteComponent,
    ModalComponent,
    ModalTogglerComponent,
    CreateNoteComponent,
    FilterNoteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
