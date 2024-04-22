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

// <<=== Question 4 ===>>

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

function shoesToText(shoes) {
    return shoes.map(shoe => `${shoe.name} - $${shoe.price} - ${shoe.type}`).join('\n');
  }
  
  // Route to handle shoe filtering
  app.get('/shoes', (req, res) => {
    const { minPrice, maxPrice, type } = req.query;
    let filteredShoes = shoes;
  
    if (minPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseFloat(minPrice));
    }
  
    if (maxPrice) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseFloat(maxPrice));
    }
  
    if (type) {
      filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
    }
  
    // Convert the filtered list to a plain text representation
    const filteredShoesText = shoesToText(filteredShoes);
  
    res.set('Content-Type', 'text/plain');
    res.send(filteredShoesText);
  });
  app.listen(3005, () => {
    console.log('Server is running on port 3005!?!!!');
  });