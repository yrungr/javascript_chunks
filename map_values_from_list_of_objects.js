const people = [{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'female', age:58}];

var values1 = people.map(thing => thing.age);
console.log(values1);

var values2 = people.map(function(thing){return thing.age});
console.log(values2)
