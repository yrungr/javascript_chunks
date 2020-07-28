var input =[
  {"name": "bob",
   "item": "apple"
  },
  {"name": "bob",
   "item": "banana"
  },
  {"name": "charlie",
   "item": "carrot"}
]

/*
// old method
var output = [];
input.forEach(function(thing){
  if (thing["name"] == "bob"){
    output.push(thing);
  }
})
*/

// new method
var output = input.filter(function(thing){return thing["name"] == "bob"});

console.log(input);
console.log(output)
