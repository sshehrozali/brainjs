const brain = require("brain.js");  // Import Brain.js module
const network = new brain.recurrent.LSTM(); // Create network


const http = require('http');

const hostname = '127.0.0.1';
const port = 80;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("index.html");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});




. 


























function emotionDetector(text) {

// Import training model
const persondata = require("./rawData/personModel.json");

// Train Person Model
console.log("Mapping values...")
const persontrainingData = persondata.map(item => ({
  input: item.msg,
  output: item.feelings
}))

console.log("Training data...")
network.train(persontrainingData, {iterations: 50, log: true});
var textMsg = "I am not happy now"; // Person's input
const PersonOutput = network.run(textMsg);  // Build person model



// See results
console.log(`Msg: ${text}`);
console.log(`Emotion: ${PersonOutput}`);
}
