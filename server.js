const express = require('express');
const app = express();

// <<=== Question 1 ===>>

app.get('/greetings/:username', (req, res) => {
    res.send(`Greetings, ${req.params.username}!!`);
});

app.listen(3002, () => {
  console.log('Server is running on port 3002!?!!!');
});

// <<=== Question 2 ===>>

app.get('/roll/:number', (req, res) => {
    if (isNaN(req.params.number)) {
        res.send(`You must specify a number!`);
    } else {
        const randomNumber = Math.floor(Math.random() * (Number(req.params.number) + 1));
    res.send(`You rolled a ${randomNumber}!!`);
    }
});

app.listen(3003, () => {
  console.log('Server is running on port 3003!?!!!');
});

// <<=== Question 3 ===>>

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index;
    if (index < 0 || index >= collectibles.length) {
        res.send(`This item is not yet in stock!`);
    } else {
        const item = collectibles[req.params.index];
    res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!!!!`);
    }
});

app.listen(3004, () => {
  console.log('Server is running on port 3004!?!!!');
});

// <<======>>