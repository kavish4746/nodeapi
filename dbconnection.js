var mysql=require('mysql');
var connection=mysql.createPool({

host:'localhost',
user:'root',
password:'',
database:'newdb'

});
module.exports=connection;