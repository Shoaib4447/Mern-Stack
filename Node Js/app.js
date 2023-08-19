/**
 * !Node Lec # 1
 */


/**
 * *Checking Node is Working
 */
// console.log('Hi');


// setTimeout(()=>{
//     console.log('Hi');
// },3000);

/*const { clearInterval } = require("timers");

var count = 1;
const validInterval = setInterval(()=>{
    
    if (count === 6){
        clearInterval(validInterval)
    }else{
        console.log( count +  'Seconds Passed');
        count += 1;
    }
},2000) 

// Node Working
*/


/**
 * !Node Globals
 * *__dirname (To check Directory Name)
 * *__filename (To check File Name)
 */

// console.log(__dirname);
// console.log(__filename);

/**
 * !Functions
 * *calling function via a parameter
 */

// function fun(data){
//     data();
// }
// var blue = function(){
//     console.log('I am blue --- Called by fun')
// }
// fun(blue);

/**
 * !MODULES AND REQUIRES (User Defined)
 * *These Like Component but instead of Components we use Modules in Node Js
 * *Built-In and User Defined Modules
 * ?How to Import and Export Modules ?
 * *To export Module we use 
 * @module.exports = modulename;
 * *To import Module we use Require
 * @require
 */


const helper = require('./helper');



// console.log(helper.user('Ali is Calling for help'));
// console.log(helper.id('123'));
// console.log(helper.email('Ali@gmail.com')); 



/**
 * !Built-In Modules or Utilities
 * !Utilities usage examples
 * *Event Module
 * *path
 * *os
 * *http
 * *crypto
 * *util
 * 
 * *Event Emitter =  We can create our own callbacks  on a particular action with event Emitter
 * 
*/

const events = require('events');
// const myEmitter = new events.EventEmitter;
// myEmitter.on('test',function(data){
//     console.log(`${data}`);
// })
// myEmitter.emit('test','Shoaib');


const path = require('path');
// Using path Utility
// const filepath = './helper.js';
// console.log('Directory: ' ,path.dirname(filepath));
// console.log('FileName: ' ,path.basename(filepath));
// console.log('Extension: ' ,path.extname(filepath));


const crypto = require('crypto');

// const name = 'Shoaib';
// // Creating a hash
// const hash = crypto.createHash('sha256');
// hash.update(name);
// const hasedValue = hash.digest('hex');
// console.log('Binary Form: ',hasedValue);


/**
 * !Util Module
 * *It performs Inheritance
 */

const util = require('node:util');
// const events = require('node:events');
// Constructor of class Teams
const teams = function(name){
    // Data Member of teams
    this.name = name;
}
// Inheritance
util.inherits(teams,events.EventEmitter);
// Objects of teams class
const Arsenal = new teams('Arsenal');
const RealMadrid = new teams('RealMadrid');
const Jeventus = new teams('Jeventus');
// Creating array to perform same thing of each object 
const teamArray = [Arsenal,RealMadrid,Jeventus];
teamArray.forEach((team)=>{
    team.on('nation',function(nation){
        console.log(team.name + ' is ' + nation + ' Football club');
    })
});

// Each Object of class team has the functionality to listen events
Arsenal.emit('nation','English');
RealMadrid.emit('nation','Italian');
Jeventus.emit('nation','Spanish');

