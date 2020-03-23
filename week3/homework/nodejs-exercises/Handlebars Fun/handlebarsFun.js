'use strict'
const Handlebars = require('handlebars');

const subjects = ["shark", "popcorn", "poison", "fork", "cherry", "toothbrush", "cannon"];
const punchlines = ["watch movie with", "spread some love", "put on cake", "clean toilets", "go to the moon", "achieve world piece", "help people learn programing"];

const subjectsRandomNum = Math.floor(Math.random() * 7);
const punchlinesRandomNum = Math.floor(Math.random() * 7);

let source = '{{subject}} is great to {{punchline}}';

let template = Handlebars.compile(source);

let data = {
    'subject': subjects[subjectsRandomNum],
    'punchline': punchlines[punchlinesRandomNum]
}

let result = template(data);

console.log(result);