const Note = require('../../db/models/note');

module.exports = {
  saveNote(req, res) {
    res.send('Strona główna działa');

    const newNote = new Note({
      title: 'zrobić jajka',
      body: 'wstawić wodę'
    });

    newNote.save()
      .then(() => {
        console.log('Notatka została zapisyna');

      });


  }
}