const prompt = require('prompt');
const data = require('./data.json');

prompt.start();

const q = data.map(item => item.question);

prompt.get(q, function (err, result) {
  const keys = Object.keys(result);
  keys.forEach(key => {
    const res = result[key];
    const answer = data.find(item => item.question === key).response;

    if (res === answer) {
      console.log('Yeah you follow it !');
    } else {
      console.log('You are a bad follower');
    }
  });
})