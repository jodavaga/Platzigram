var page = require('page');
var template = require('./template');

var main = document.getElementById('main-container');


var pictures = [
    {
        user:{
            username: 'jodavaga',
            avatar: 'https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/1463583_10202803403108611_1605134411_n.jpg?oh=4819e49646472b68204247aa90843676&oe=5A4FCAD8'
        },
        url: 'office.jpg',
        likes: 10,
        liked: true
    },

    {
        user:{
            username: 'otroUser',
            avatar: 'https://scontent.fclo1-2.fna.fbcdn.net/v/t1.0-9/1463583_10202803403108611_1605134411_n.jpg?oh=4819e49646472b68204247aa90843676&oe=5A4FCAD8'
        },
        url: 'office.jpg',
        likes: 2,
        liked: true
    }
    
];

page('/', function(ctx, next){
    main.innerHTML = template(pictures);
});

page();