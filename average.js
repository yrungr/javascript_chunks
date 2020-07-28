const people = [{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'female', age:58}];

const females = people.filter(person => person.gender === 'female');

const average = females.reduce((total, next) => total + next.age, 0) / females.length;

console.log(average);


const females2 = people.filter(function(person){ return person.gender === 'female'});

const average2 = females.reduce(function(total, next){ return total + next.age}, 0) / females.length;

console.log(average2)
