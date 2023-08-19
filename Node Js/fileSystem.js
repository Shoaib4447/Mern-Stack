/**
 * *Built-In Module of Node Js
 * !Read and Write File in Synchronously Mode
 */
const { error } = require('node:console');
const fs = require('node:fs');
// const { text } = require('stream/consumers');

// const text = fs.readFileSync('read-me.txt','utf-8');
// console.log(text);

// try {
//     const text = fs.readFileSync('read-me.txt', 'utf-8');
//     console.log(text);
// } catch (error) {
//     console.error('Error reading file:', error.message);
// }

// try{
//     const writeText = fs.writeFileSync('written.txt',text); 
// }
// catch{
//     console.error('Error File Not written',error.message);
// }


/**
 * *Built-In Module of Node Js
 * !Read and Write File in Asynchronously Mode
 **1 WAY
*/


// const text = fs.readFile('read-me.txt','utf-8',function(error,data){
//     fs.writeFile('wri.txt',data,function(error){
//         console.error(error);
//     })
// })

/**
 * *Built-In Module of Node Js
 * !Read and Write File in Asynchronously Mode
 ** 2 WAY
*/


// fs.readFile('read-me.txt', 'utf-8', function(error, text) {
//     if (error) {
//         console.error(error);
//         return;
//     }

//     fs.writeFile('writ.txt', text, function(error) {
//         if (error) {
//             console.error(error);
//             return;
// }
//         console.log('Write operation successful.');
//     });
// });


/**
 * *Built-In Module of Node Js
 * !Remove Files not folders (unLink Function)
*/

// fs.unlink('writefile.txt',function(error){
//     console.error('File was Deleted',error.message);
// })

/**
 * *Built-In Module of Node Js
 * !Make folders (mkdir Function)
*/

fs.mkdirSync('my-folder');
