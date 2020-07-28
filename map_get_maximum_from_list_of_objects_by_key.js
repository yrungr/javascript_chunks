const people = [{name:'Sarah', gender:'female', age:25}, {name:'Tom', gender:'male', age:18}, {name:'Tim', gender:'male', age:65}, {name:'Kim', gender:'female', age:58}];

var max1 = Math.max(...people.map(thing => thing.age), 0);
console.log(max1);

var max2 = Math.max.apply(null, people.map(function(power){ return power.age}));
console.log(max2)
