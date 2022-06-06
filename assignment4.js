
/* Problem 1:ana to vori part start*/
function anaToVori (ana){
if(typeof ana != "number"){
return "please enter a valid quantity"
}
if(ana <= 0){
return "please enter a valid positive number"
}
if(ana > 200){
return "No more than 200 is acceptable."
}
var vori = ana / 16;
return vori;
}
var outputVori = anaToVori (96);
console.log(outputVori);
/* Problem 1:ana to vori part end*/
/* Problem 2: panda cost part start */
function pandaCost (singara , somucha, jilapi){
if(typeof (singara, somucha, jilapi) != "number"){
return "please enter a valid quantity"
}
if(singara, somucha, jilapi <= 0){
return "please enter a valid positive number"
}
if(singara, somucha, jilapi > 200){
return "No more than 200 is acceptable."
}
var singaraPrice = singara * 7;
var somuchaPrice = somucha * 10;
var jilapiPrice = jilapi * 15;
totalCost = singaraPrice + somuchaPrice + jilapiPrice;
return totalCost;
}
var resultTotalCost = pandaCost (5, 10, 20);
console.log(resultTotalCost);
/* Problem 2: panda cost part end */
/* Problem 3: picnic Budget part start */
function picnicBudget (quantity){
if(typeof quantity != "number"){
return "please enter a valid quantity"
}
if(quantity <= 0){
return "please enter a valid positive number"
}
let budget;
if(quantity>200){
let firstBudget = 100 * 5000;
let secondBudget = 100 * 4000;
let remaining = (quantity - 200) * 3000;
budget = firstBudget + secondBudget + remaining;
return budget;
}
else if(quantity>100){
let firstBudget = 100 * 5000;
let remaining = (quantity - 100) * 4000;
budget = firstBudget + remaining;
return budget;
}
else if(quantity<=100){
let budget = quantity * 5000;
return budget;
}
}
var output = picnicBudget(280);
console.log(output);
/* Problem 3: picnic Budget part end */
/* problem no 4: odd Friend part start */
function oddFriend(name) {
if (typeof name != "object") {
return "please enter an array only"
}
let odd = "";
for (let i = 0; i <= name.length; i++) {
if (name[i].length % 2 != 0) {
odd = name[i];
return odd;
}
}
}
const oddName = oddFriend(['dina', 'mumu', 'jim', 'rakib', 'shanta']);
console.log(oddName);
/* problem no 4: odd Friend part end */