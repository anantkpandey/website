package com.anantsir.notebook.repository;

import com.anantsir.notebook.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
