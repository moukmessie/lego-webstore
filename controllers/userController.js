exports.sign_up = function (req, res) {
    res.render('layout_page.ejs', {title: "sign up", page:'partials/inscription.ejs'});
}

exports.sign_in = function (req, res) {
    res.render('layout_page.ejs', {title: "sign in"})
}