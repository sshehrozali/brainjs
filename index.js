const brain = require("brain.js");
const network = new brain.recurrent.LSTM();

// Import training model
const persondata = require("./rawData/personModel.json");
// const replierdata = require("./rawData/replierModel.json");


console.log("Mapping values...")
// Train Person Model
const persontrainingData = persondata.map(item => ({
  input: item.msg,
  output: item.feelings
}))

console.log("Training data...")
network.train(persontrainingData, {iterations: 500, log: true});
var textMsg = "I am not happy now"; // Person's input
const PersonOutput = network.run(textMsg);  // Build person model


// Train Replier Model
// const repliertrainingData = replierdata.map(item => ({
//   input: item.expectations,
//   output: item.reply
// }))

// network.train(repliertrainingData, {
//   iterations: 500
// });
// const ReplierOutput = network.run(PersonOutput);  // Build replier model





// See results
console.log(`Msg: ${textMsg}`);
console.log(`Emotion: ${PersonOutput}`);
// console.log(`Reply: ${ReplierOutput}`);