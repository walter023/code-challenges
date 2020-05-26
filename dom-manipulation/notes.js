class Notes {
  constructor() {
    this.notes = [];
    this.id = this.getId();
    this.style = "";
    this.htmlNotes = "";
    document
      .getElementById("btnAdd")
      .addEventListener("click", this.addNote.bind(this));
    document.addEventListener("click", this.deleteNote.bind(this));
    document.addEventListener("click", this.editNote.bind(this));
  }
  addNote = (e) => {
    this.title = document.getElementById("txtTitle").value;
    this.content = document.getElementById("txtContent").value;
    if (
      this.title &&
      this.title.length > 0 &&
      this.content &&
      this.content.length > 0
    ) {
      const newNote = {
        id: this.id(),
        title: this.title,
        content: this.content,
      };
      this.notes = [...this.notes, newNote];
      this.loadNotes(newNote);
    }
  };
  saveNote = (title, content, note) => {
    note.title = title.value;
    note.content = content.value;
    const notes = this.notes.filter((n) => n.id != note.id);
    this.notes = notes.concat(note);
    this.finishUpdate(note.id, title, content);
  };
  loadNotes = (newNote) => {
    this.htmlNotes = this.htmlNotes + this.createHTML(newNote);
    document.getElementById("container").innerHTML = this.htmlNotes;
  };
  createHTML = (note) => {
    this.style = this.randomNotes();
    const htmlNote = `<div class="note" id=${note.id} style=${this.style}>
                          <strong>${note.title}</strong>
                          <p>${note.content}</p>
                          <span>
                          <button id="btnDelete" data-note-id=${note.id}>Delete</button>
                          <button id="btnEdit" data-note-id=${note.id}>Edit</button>
                          </span>
                        </div>`;
    return htmlNote;
  };
  deleteNote = (e) => {
    if (e.target && e.target.id == "btnDelete") {
      const noteId = e.target.getAttribute("data-note-id");
      const element = document.getElementById(noteId);
      element.parentNode.removeChild(element);
      this.notes = this.notes.filter((note) => note.id != noteId);
      document.getElementById("btnAdd").disabled = false;
      this.htmlNotes = document.getElementById("container").innerHTML;
    }
  };
  editNote = (e) => {
    if (e.target && e.target.id == "btnEdit") {
      const noteId = e.target.getAttribute("data-note-id");
      const note = this.notes.filter((note) => note.id == noteId);
      const elements = document.getElementById(noteId).children;

      const tittle = this.createElement("INPUT", note[0].title);
      const content = this.createElement("TEXTAREA", note[0].content);
     
      tittle.setAttribute("class", "tittle");
      content.setAttribute("class", "description");

      content.value = note[0].content;
      elements[0].textContent = "";
      elements[0].appendChild(tittle);
      elements[1].textContent = "";
      elements[1].appendChild(content);

      const btnCancel = document.createElement("BUTTON");
      btnCancel.innerHTML = "cancel";
      btnCancel.setAttribute("id", "cancel");

      btnCancel.addEventListener("click", () => {
        this.finishUpdate(noteId, tittle, content);
      });
      const btnSave = document.createElement("BUTTON");
      btnSave.innerHTML = "Save";
      btnSave.setAttribute("id", "save");
      btnSave.addEventListener("click", () =>
        this.saveNote(tittle, content, note[0])
      );
      document.getElementById(noteId).appendChild(btnCancel);
      document.getElementById(noteId).appendChild(btnSave);
      e.target.disabled = true;
    }
    document.getElementById("btnAdd").disabled = false;
  };
  finishUpdate = (noteId, title, content) => {
    document.getElementById(noteId).querySelector("strong").innerHTML =
      title.value;
    document.getElementById(noteId).querySelector("p").innerHTML =
      content.value;
    document.getElementById(noteId).querySelector("#save").remove();
    document.getElementById(noteId).querySelector("#cancel").remove();
    title.remove();
    content.remove();
    document.getElementById(noteId).querySelector("#btnEdit").disabled = false;
  };
  createElement = (type, value) => {
    const input = document.createElement(type);
    input.setAttribute("type", "text");
    input.setAttribute("id", this.id());
    input.setAttribute("value", value);
    return input;
  };
  clearFields = () => {
    document.getElementById("txtTitle").value = "";
    document.getElementById("txtContent").value = "";
  };
  getId = () => {
    let counter = 0;
    return () => {
      return counter++;
    };
  };
  randomNotes = () => {
    return (
      "right:" +
      this.randomBetween(0, window.innerWidth - 150, "px") +
      ";" +
      "top:" +
      this.randomBetween(0, window.innerHeight - 150, "px")
    );
  };
  randomBetween = (x, y, s) => {
    return x + Math.ceil(Math.random() * (y - x)) + s;
  };
}
const notes = new Notes();
