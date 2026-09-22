package com.anantsir.notebook.controller;

import com.anantsir.notebook.model.Note;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @GetMapping
    public Note getNote() {
        return new Note(
            1L,
            "My First Note",
            "I built my first online notebook API."
        );
    }

    @PostMapping
    public Note createNote(@RequestBody Note note) {
        note.setId(1L);
        return note;
    }
}
