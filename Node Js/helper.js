/**
 * !User-defined Module
*/

// const helper = function(data){
//     console.log('Mn helper file sy aya hon');
//     return `${data}`;
// }

const user = function(user){
    console.log('Mn helper ka user Function hon')
    return `${user}`
};
const id = function(id){
    console.log('Mn helper sy id Function hon')
    return `${id}`
};
const email = function(email){
    console.log('Mn helper ka email Function hon');
    return `${email}`
};

/**
 * !How to Export helper Functions
*/

// module.exports.user = user;
// module.exports.id = id;
// module.exports.email = email;

/**
 * !Another Way to Export Modules
 */

module.exports = {
    user,
    id,
    email
}