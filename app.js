const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');

let PORT = process.env.PORT;
if (PORT == null || PORT == '') {
  PORT = 4000;
}

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/about', function (req, res) {
  res.render('about');
});

app.get('/oldandnew', function (req, res) {
  res.render('oldandnew');
});

app.get('/events', function (req, res) {
  res.render('events');
});

app.get('/groups', function (req, res) {
  res.render('groups');
});

app.get('/official', function (req, res) {
  res.render('official');
});

app.get('/menstriematters', function (req, res) {
  res.render('menstriematters');
});

app.get('/localcontacts', function (req, res) {
  res.render('localcontacts');
});

app.get('/downloadFile', function (req, res) {
  var file = path.join(__dirname, '/pdfs/');
  res.download(file, function (err) {
    if (err) {
      console.log('Error');
      console.log(err);
    } else {
      console.log('Success');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
