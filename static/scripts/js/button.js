var getNote = function() {
    var key = jQuery(this.innerHTML).text();
    var note = key.replace("#", "sharp");

    var notesection = document.getElementById('notes');
    notesection.innerText = notesection.innerText + " " + key;
    // alert(eval(note.toLowerCase()));
}

var removeNoteFromNotes = function() {
    var notesection = document.getElementById('notes');
    var presentText = notesection.innerText;
    var notes = presentText.split(" ");
    notes.pop();
    notesection.innerText = notes.join(" ");
}

var removeNotes = function() {
    var notesection = document.getElementById('notes');
    notesection.innerText = "";
}

var playTrackNotes = function() {
    var notesection = document.getElementById('play');
    var notes = notesection.innerText;
    // Construct a 2D array, first value is a frequency and second one is a time
}

window.onload = function() {
    var buttons = document.getElementsByClassName('btn-warning');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', getNote, false);
    }

    var deleteNotes = document.getElementById('delete');
    deleteNotes.addEventListener('click', removeNotes, false);

    var removeNote = document.getElementById('remove');
    removeNote.addEventListener('click', removeNoteFromNotes, false);

    var playNotes = document.getElementById('play');
    playNotes.addEventListener('click', playTrackNotes, false)
}
