var connection = require('../config/connection.js')

module.exports = (app) =>{
    app.get("/", function (req, res) {
        connection.query("SELECT * FROM burgers", function (err, data) {
            if (err) throw err;
            var burgerArray = [];
            for (var i = 0; i < data.length; i++) {
                var obj = {
                    id: data[i].id,
                    burger_name: data[i].burger_name,
                    devoured: data[i].devoured
                }
                burgerArray.push(obj);
            }
            res.render("index", { meal: burgerArray });
        });
    });
    
    app.post("/burgers", function (req, res) {
        connection.query("INSERT INTO burgers (burger_name VALUES (?)", [req.body.burgerName], function (err, result) {
            if (err) {
                return res.status(500).end();
            }
            res.json({ id: result.id });
            console.log({ id: result.id });
        });
    });
    
    app.put("/burgers/:id", function(req, res) {
        connection.query("UPDATE burgers SET devoured = 1 WHERE id = ?", [req.params.id], function(err, result) {
          if (err) {
            // If an error occurred, send a generic server failure
            return res.status(500).end();
          }
          else if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          }
          res.status(200).end();
      
        });
      });
    
    // Post route -> back to home
    app.post("/", function (req, res) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burgerName], function (err, result) {
            if (err) throw err;
            res.redirect("/");
        });
    });
    
    
}
