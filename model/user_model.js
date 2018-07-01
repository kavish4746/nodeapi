var db=require('../dbconnection');

var user={

getAllUserById:function(item,callback)
{
    return db.query('Select * from user where user_id=? and password=?',[item.user_id,item.password],callback);
},
getAllUser:function(callback){
    
     return db.query('Select * from user',callback);
 },
 getAllUserByEmailId:function(user_id,callback){
    
    return db.query('Select * from user where user_id=?',[user_id],callback);
 },
 updateUser:function(user_id,item,callback){
    return db.query('update user set password=?,name=?,age=?,city=?,mob_no=?,address=? where user_id=?',[item.password,item.name,item.age,item.city,item.mob_no,item.address,user_id],callback)
},
getPassword:function(user_id,callback){
    return db.query('select password from user where user_id=?',[user_id],callback);
},
addUser:function(item,callback){
    return db.query('insert into user values(?,?,?,?,?,?,?)',[item.user_id,item.password,item.name,item.age,item.city,item.mob_no,item.address],callback)
},
getAllproduct:function(callback){
    return db.query('select * from product',callback);
},
getallproById:function(p_id,callback){
    return db.query('select * from product where p_id=?',[p_id],callback)
},
getallMobile:function(cat_name,callback){
    return db.query('select c.*,p.* from product p,category c where c.cat_id=p.fkcat_id and c.cat_name=?',[cat_name],callback)
},
addorder:function(item,callback){
    return db.query('insert into order_tbl values(?,?,?,?,?)',[item.order_id,item.date,item.amount,item.fkp_id,item.fkuser_id],callback)
},
getallOrder:function(fkuser_id,callback){
    return db.query('select * from order_tbl where fkuser_id=?',[fkuser_id],callback)
},
similarProduct:function(fkcat_id,p_id,callback){
    return db.query('select * from product where fkcat_id=? and p_id NOT IN (?)',[fkcat_id,p_id],callback);
},
updateProduct:function(qty,item,callback){
    return db.query('update product set soh=? where p_id=?',[qty,item.p_id],callback)
}
}
module.exports=user;