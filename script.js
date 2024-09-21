const noteInput = document.getElementById("noteInput");
const notesDiv = document.getElementById("notesDiv");
const zeroNotes = document.getElementById("zeroNotes");
const loginDiv = document.getElementById("loginDiv");
const optionsDiv = document.getElementById("optionsDiv");



var notesArray = [];

function showOptions() {
    optionsDiv.style.display = "flex";
    notesDiv.style.display = "none";
    zeroNotes.style.display = "none";
}

function showHome() {
    optionsDiv.style.display = "none";
    loginDiv.style.display = "none";
    notesDiv.style.display = "block";
    getNotes();
}

function showLogin() {
    optionsDiv.style.display = "none";
    loginDiv.style.display = "flex";
}

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
        if (notesArray.length > 0) {
            zeroNotes.style.display = "none";
            notesDiv.style.display = "block";
            showNotes();
        } else {
            zeroNotes.style.display = "block";
            notesDiv.style.display = "none";
        }
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

        const deleteButton = document.createElement("i");
        deleteButton.className = "bi bi-trash";
        deleteButton.onclick = function () {

            if (confirm("are you sure to delete note?") == true) {
                notesArray.splice(index, 1);
                saveNotes();
            }
            
        }
        newDiv.appendChild(deleteButton);

        notesDiv.appendChild(newDiv);
    }
}

getNotes();