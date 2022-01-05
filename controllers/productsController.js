
const data = require('../models/productsManager');
const categories=data.all_categories();
const prod =data.all_products();


exports.product_list= function (req, res) {

    res.render('layout_page.ejs', { title : 'products list',page:'partials/products_list.ejs', data: categories, products:prod});
}

exports.product_info= function (req, res) {
    const id =`${req.params.idproduct}`;
    const product_info =data.get_product(id);

    if (product_info != null){
        //res.send(`Fiche produit : ${req.params.idproduct}`);
        res.render('layout_page.ejs', {title: "Poduct info",page:'partials/product_infos.ejs', id:id, product: product_info });

    }else {
        res.redirect('/products');
    }
   }

