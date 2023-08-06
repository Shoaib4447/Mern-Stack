const fs = require('fs');
// /**
//  * ! Read and Write in sync mode (Don't do anything until I read or write the data)
//  */
// const text = fs.readFileSync('read-me.txt','utf-8');
// console.log(text);

// fs.writeFileSync('write.txt' , text)

/**
 * ! Read and Write in async mode (Perform other things Parallel till then I will read or write data)
 */

const text2 = fs.readFile('read-me.txt','utf-8',function(error,data){
    fs.writeFile('writefile.txt',data,function(error){
        console.error(error); 
    });
});

/**
 * ! To Delte/Remove Files
 */

// fs.unlink('write.txt', function(error){
//    console.error(error);
//   });
  
/**
 * ! How to create/delete Folder/Directory
 */

// fs.mkdirSync('myfolder');
// fs.rmdirSync('myfolder');

