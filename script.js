const noteInput = document.getElementById("noteInput");

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
    console.log(notesArray);
}