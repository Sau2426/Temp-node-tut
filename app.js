//npm  - global command, comes with node
//npm --version

//local dependency - use it only in this particular project
//npm i <packageName>


//global dependency  - use it in any project
//npm install -g <packageName>
//npm install -g <packageName>
//sudo install -g <packageName> (mac)

//package.json - manifest file (stores important info about project/package)
//manual approach (create packag.json in the root, create properties etc)
//npm init (step by step, press emter to skip)
//npm init -y (everything default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _flattenDeep(items);
console.log(newItems);