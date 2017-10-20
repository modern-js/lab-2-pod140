const api = require('express')();

let flag = 0;
api.get('/food', (req, res) => {
    if (flag < 10) {
        res.json({food: "Burger King"});
        flag ++;
    }
    else {
        res.json({error: "Unexpected Error"});
    }
});

api.get('/drink', (req, res) => {
    if (flag < 10) {
      res.json({drink: "Coke"});
      flag ++;
    }
    else {
      res.json({error: "Unexpected Error"});
    }
});

api.get('/tv', (req, res) => {
    if (flag < 10) {
        res.json({tv: "Game of Thrones"});
        flag ++;
    }
    else {
      res.json({error: "Unexpected Error"});
    }
});

module.exports = api;
