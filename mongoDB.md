show dbs 显示所有数据库  
use collections 跳转到某集合，没有该集合时会创建该集合  

CRUD  
--Create:
    db.collections.insertOne({}) 增加一个
    例: db.students.insertOne({"name":"Ryan"})  
    db.collections.insertMany([{},{}]) 增加多个  
    例: db.students.insertMany([{"name":"Mary"},{"name":"Peter"}])  

--Read:  
    db.collections.find() 搜索集合内所有内容
    例：db.students.find()  
    db.collections.find({}) 根据筛选条件搜索  
    例：db.students.find({name:"Ryan"})

--Update:  
    db.collections.updateOne({},{$set:{}}) 首先updateOne只会更新第一个符合条件的信息;其次更新有两个参数，第一个是要筛选的对象，第二个是改变的内容（要用$set:{}）来修改  
    例: db.collections.updateOne({name:"ryan"},{$set:{name:"Ryan",age:30}}) 会把ryan改为Ryan，并且增加age属性  
    db.collections.updateMany({},{$set:{}}) 只要符合筛选条件的，都会被更改  
    例: db.collections.updateMany({name:"Ryan"},{$set:{age:33}})  

--Delete:  
    db.collections.deleteOne({}) 删除所有内容，慎用!  
    db.collections.deleteOne({筛选条件}) 按照筛选条件，删除符合条件的第一条内容  
    db.collections.deleteMany({筛选条件}) 按照筛选条件，删除符合条件的所有内容  
    例: db.students.deleteMany({age:30})
