const hbs = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];
const phrase = '<p>{{subject}} is great to {{punchline}}</p>';

const template = hbs.compile(phrase);

const data = {
  subject: subjects[Math.floor(Math.random() * 7)],
  punchline: punchlines[Math.floor(Math.random() * 7)]
}

const result = template(data);

console.log(result);