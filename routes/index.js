module.exports = {
    getHomePage: (req, res) => {
        let query = "SELECT * FROM `pessoas`"; 

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                console.log("ERRRRROOOOOOOOOOOOO");
                res.redirect('/');
            }
            res.render('index.ejs', {
                title: "NodeApp"
                ,pessoas: result
            });
        });
    },
};