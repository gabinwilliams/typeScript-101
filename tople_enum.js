"use strict";
// You can explicitly type out the obj, or let typeScript infer the type
// const person: 
// {name: string;
// age: number;
// } 
// = {
//   name: 'Gabin',
//   age: 30,
// };
// Using enum we avoid extra code and the roles get auto assigned a number 
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_ONLY"] = 2] = "READ_ONLY";
})(Role || (Role = {}));
;
const person = {
    name: 'Gabin',
    age: 30,
    hobbies: ['bouldering', 'biking'],
    roles: Role.ADMIN
};
// const person: {name: string, age: number, hobbies: string[], roles: [number, string]} = {
//     name: 'Gabin',
//     age: 30,
//     hobbies: ['bouldering', 'biking'],
//     // tuple type. Tells what each index type will be. Restricts length unless you use .push
//     roles: [1, 'admin']
//   };
console.log(person.name);
for (const user of person.hobbies) {
    console.log(user.toUpperCase());
}
