
var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true, useUnifiedTopology: true});

var products = [
  new Product({
        imagePath: 'https://img.fixthephoto.com/blog/images/gallery/news_preview_mob_image__preview_571.',
        title: 'Earings',
        description: 'Best Earings',
        price: 10}),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/68/1e/3b/681e3bb37c46b2a7d2d49493f4b8b74e.jpg',
        title: 'Trousers',
        description: 'Best Trousers',
        price: 13}),
    new Product({
        imagePath: 'https://fuckingyoung.es/wp-content/uploads/2015/11/A-Dance-With-Andrea-Cammarosano_fy7.jpg',
        title: 'Suit',
        description: 'Best Suit',
        price: 15}),
    new Product({
        imagePath: 'https://fuckingyoung.es/wp-content/uploads/2015/11/A-Dance-With-Andrea-Cammarosano_fy2.jpg',
        title: 'New Arrival',
        description: 'Best New Arrival',
        price: 15}),
    new Product({
        imagePath: 'https://fuckingyoung.es/wp-content/uploads/2015/11/A-Dance-With-Andrea-Cammarosano_fy1.jpg',
        title: 'Baggy',
        description: 'Best Baggy',
        price: 14}),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/1e/f8/b6/1ef8b6f30d039e890da59a9eeccc2f1d.jpg',
        title: 'Classic',
        description: 'Best Classic',
        price: 20}),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}