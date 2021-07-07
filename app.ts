
// You can explicitly type out the obj, or let typeScript infer the type

// const person: 
// {name: string;
// age: number;
// } 
// = {
//   name: 'Gabin',
//   age: 30,
// };

const person: {name: string, age: number, hobbies: string[], roles: [number, string]} = {
    name: 'Gabin',
    age: 30,
    hobbies: ['bouldering', 'biking'],
    roles: [1, 'admin']
  };

console.log(person.name);

for(const user of person.hobbies) {
  console.log(user.toUpperCase());
  
}
