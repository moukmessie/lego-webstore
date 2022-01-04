
exports.product_list= function (req, res) {
    res.render('layout_page.ejs', { title : 'products list',page:'partials/products_list.ejs'});
}

exports.product_info= function (req, res) {
    //res.send(`Fiche produit : ${req.params.idproduct}`);
    res.render('layout_page.ejs', {title: "Poduct info",page:'partials/product_infos.ejs', id:`${req.params.idproduct}`});
}