const fs = require('fs');


//synchronous
// fs.writeFileSync('./test.txt' , 'Hello there');

//asynchronous
// fs.writeFile('./test.txt' , 'Hey buddy' , (err) => {});
// fs.writeFile("./contact.txt" , "my number is 8484848488" , (err) => {});



//  let rusult = fs.readFileSync('./contact.txt' , 'utf-8');
//  console.log(rusult);




fs.readFile("./contact.txt" , "utf-8" , (err , result) => {
          if(err){
                    console.log("Error" , err);
          }else{
                    console.log(result);
          }
});