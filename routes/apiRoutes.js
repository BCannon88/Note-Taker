
const router = require("express").Router();
const store = require("../db/log");

// Get Route
router.get("/notes", function (req, res) {
  store
    
    .getNotes()
   
    .then(notes => res.json(notes))
    
    .catch(err => res.status(500).json(err));
});
// Post Route
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    
    .catch(err => res.status(500).json(err));
});

//Deletes Notes
router.delete("/notes/:id", function (req, res) {
  store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    //if it hits an error sends it to the front end 
    .catch(err => res.status(500).json(err));
});

module.exports = router;