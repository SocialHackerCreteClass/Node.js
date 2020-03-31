const hbs = require("handlebars");

const subjects = [
  "shark",
  "popcorn",
  "poison",
  "fork",
  "cherry",
  "toothbrush",
  "cannon"
];
const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing"
];

const source = "{{subject}} is great to {{punchline}}";

const template = hbs.compile(source);
const result = template({
  subject: subjects[Math.floor(Math.random() * 7)],
  punchline: punchlines[Math.floor(Math.random() * 7)]
});

console.log(result);
