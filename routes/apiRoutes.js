// Routing
const router = require('express').Router();
const fs = require("fs");

router.get("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/notes", function(req, res) {
    fs.readFile("./db/db.json", "utf8", function(err, data) {

        if (err) throw err;
        let raw = JSON.parse(data);
        raw.push(req.body);
        
        fs.writeFile("./db/db.json", JSON.stringify(raw), function(err) {

            // Throw error code of there was issue writing to db.json
            if(err) return err;

            // log "write success" to console/terminal
            console.log("write success");

        });
    });

    // End response process
    res.end();

});

module.exports = router;
