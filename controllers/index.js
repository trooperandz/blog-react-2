// This file contains all routes; no need for separation yet
'use strict';

const express = require('express');
const app = express();
const models = require('../models');

// Create a new post
app.post('/posts', (req, res) => {

});

// Get a post by id
app.get('/posts/:id', (req, res) => {

});

// Create a category record
app.post('/categories', (req, res) => {
  let name = req.body.name;

  models.Category.create({ name }).then((category) => {
    return res.json(category);
  });
});

// Get all categories
app.get('/categories', (req, res) => {
  models.Category.findAll().then((categories) => {
    return res.json(categories);
  });
});

// Get one category by id
app.get('/categories/:id', (req, res) => {
  let id = req.params.id;

  models.Category.findById(id).then((categories) => {
    return res.json(categories);
  });
});

module.exports = app;