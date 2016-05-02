var swig=require('swig');

var tpl=swig.compileFile('/path/to/template.html');

console.log(tpl({article:{title:'Swig is fun!'}}));

console.log(swig.render('{% if foo %}Hooray!{% endif %}', { locals: { foo: true }}));
