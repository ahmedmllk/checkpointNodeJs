const fs=require('fs')
const generatePassword = require('generate-password');

function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 8, 
    numbers: true,
    symbols: false,
    uppercase: true,
    lowercase: true,
  });

  return password;
}
const randomPassword = generateRandomPassword()+'\n';

fs.appendFile('passwords.txt',randomPassword,function(err){
    if (err) throw err;
})
fs.readFile('passwords.txt',function(err,data){
    if(err){
        return console.error(err)
        }
        console.log('all pass words are: ', data.toString())
    });
