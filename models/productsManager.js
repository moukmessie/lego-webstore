const manager = require('./manager');

exports.all_categories = function() {
  const db = manager.connect();
  const sql = 'SELECT name from categories';
  const results = db.prepare(sql).all();
  db.close();

//console.log(results)
 return results;
};

exports.all_products=()=>{
    const db = manager.connect();
      const sql = 'SELECT products.id, products.name, products.img0 as image, products.price,categories.name as name_cat  FROM products INNER JOIN categories ON products.id_category=categories.id';
    // const sql = 'SELECT products.id FROM products ';
    const results = db.prepare(sql).all();
    db.close();


    return results;

}
exports.get_product=function (idproduct) {
    const db=manager.connect();
    const sql = 'SELECT name, price, img1 ,img2, img3, description, spec FROM products WHERE id=?';
    const  results = db.prepare(sql).get(idproduct);
    db.close();
    //console.log(results);
    return results !==null? results : "Pas de resultat";

}
