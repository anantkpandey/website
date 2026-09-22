const loadNotesButton = document.getElementById("loadNotesButton");
const notesContainer = document.getElementById("notesContainer");

loadNotesButton.addEventListener("click", loadNotes);

async function loadNotes() {

    notesContainer.innerHTML = "<p>Loading notes...</p>";

    try {

        const response = await fetch("http://localhost:8080/api/notes");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const notes = await response.json();

        displayNotes(notes);

    } catch (error) {

        console.error(error);

        notesContainer.innerHTML =
            "<p>Could not load notes from the backend.</p>";
    }
}

function displayNotes(notes) {

    if (notes.length === 0) {
        notesContainer.innerHTML = "<p>No notes found.</p>";
        return;
    }

    notesContainer.innerHTML = "";

    notes.forEach(note => {

        const article = document.createElement("article");

        const title = document.createElement("h3");
        title.textContent = note.title;

        const content = document.createElement("p");
        content.textContent = note.content;

        article.appendChild(title);
        article.appendChild(content);

        notesContainer.appendChild(article);
    });
}
