const brain = require("brain.js");
const network = new brain.recurrent.LSTM();

// Import training model
const persondata = require("./rawData/personModel.json");
const replierdata = require("./rawData/replierModel.json");



// Train Person Model
const persontrainingData = persondata.map(item => ({
  input: item.msg,
  output: item.feelings
}))

network.train(persontrainingData, {
  iterations: 500
});
var textMsg = "i love you so much"; // Person's input
const PersonOutput = network.run(textMsg);  // Build person model


// Train Replier Model
const repliertrainingData = replierdata.map(item => ({
  input: item.expectations,
  output: item.reply
}))

network.train(repliertrainingData, {
  iterations: 500
});
const ReplierOutput = network.run(PersonOutput);  // Build replier model





// See results
console.log(`Msg: ${textMsg}`);
console.log(`Expectation: ${PersonOutput}`);
console.log(`Reply: ${ReplierOutput}`);