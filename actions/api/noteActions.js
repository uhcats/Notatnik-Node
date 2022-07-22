const Note = require('../../db/models/note');

class NoteActions {
  saveNote(req, res) {
    // res.send('Strona główna działa');

    // const newNote = new Note({
    //   title: 'zrobić jajka',
    //   body: 'wstawić wodę'
    // });

    // newNote.save()
    //   .then(() => {
    //     console.log('Notatka została stworzona');

    //   });

    const title = req.body.title;
    const body = req.body.body;
    res.send('Notatka została stowrzona. Tytuł: ' + title + ' treść ' + body);
  }

  getAllNotes(req, res) {

    res.send('API działa');
  }

  getNote(req, res) {

    res.send('Info o notatce');
  }


  updateNote(req, res) {

    res.send('Notatka zaktualizowana');
  }

  deleteNote(req, res) {
    const id = req.params.id;
    res.send('Notatka usunięta. ID:' + id);
  }
}

module.exports = new NoteActions();