var fs=require('fs')


fs.appendFile('welcome.txt','hello Node',function(err){
    if (err) throw err;
})
fs.readFile('welcome.txt',function(err,data){
    if(err){
        return console.error(err)
        }
        console.log(data.toString())
    });


