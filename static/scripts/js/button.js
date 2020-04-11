var getNote = function() {
    var key = jQuery(this.innerHTML).text();
    var note = key.replace("#", "sharp");
    alert(eval(note.toLowerCase()));
}

window.onload = function() {
    var buttons = document.getElementsByClassName('btn-warning');

    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', getNote, false);
    }
}
