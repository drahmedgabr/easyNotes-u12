const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notesDiv");

var notesArray = [];

function checkInput() {
    if(noteInput.value == ""){
        alert("Please enter your note");
    } else {
        addNote();
    }
}

function addNote() {
    const newNote = noteInput.value;
    notesArray.push(newNote);
    noteInput.value = "";
    saveNotes();
}

function saveNotes() {
    const notesString = JSON.stringify(notesArray);
    localStorage.setItem("notes", notesString);
    getNotes();
}

function getNotes() {
    const notesString = localStorage.getItem("notes");
    if(notesString == null){
        console.log("No notes found");
    } else {
        notesArray = JSON.parse(notesString);
        showNotes();
    }
}

function showNotes() {

    notesDiv.innerHTML = "";

    for (let index = 0; index < notesArray.length; index++) {
        const element = notesArray[index];
        
        const newDiv = document.createElement("div");

        const newP = document.createElement("p");
        newP.innerText = element;
        newDiv.appendChild(newP);

        const newIcon = document.createElement("i");
        newIcon.className = "bi bi-trash";
        newDiv.appendChild(newIcon);

        notesDiv.appendChild(newDiv);
    }
}

getNotes();