var express=require('express');
var app=express();
var swig = require('swig');
var url = require('url');

// This is where all the magic happens!
app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/images', express.static('images'));

// Swig will cache templates for you, but you can disable
// that and use Express's caching instead, if you like:
app.set('view cache', false);
// To disable Swig's cache, do the following:
swig.setDefaults({ cache: false });
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!

//app.get('/', function (req, res) {
//	var query=url.parse(req.url, true).query;
//	console.log(query['width']);
//	res.render('test', { 'width': query['width'] });
//});

app.get('/:width', function (req, res) {
	res.render('test', { 'width': req.params.width });
});

app.get('/mimg/:count', function (req, res) {
	var count=Array.apply(null, {length:req.params.count}).map(Number.call, Number);
	console.log(count);
	res.render('mulimg', { 'count': count });
});


app.listen(1337);
console.log('Application Started on http://localhost:1337/');
