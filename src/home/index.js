var page = require('page');
var template = require('./template');

var main = document.getElementById('main-container');

page('/', function(ctx, next){
    main.innerHTML = template;
});

page();