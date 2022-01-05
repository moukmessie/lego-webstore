const manager = require('./manager');

exports.insert_user= function(lastname, firstname, day, month, year, email, passwd){
    const birthday=day.concat( month,year);
    const db = manager.connect();
    const sql = "INSERT INTO users (lastname, firstname, birthday, email, password) VALUES (?,?,?,?,?)";
    return db.run(sql,[lastname,firstname,birthday,email, passwd]);
    db.close();
}