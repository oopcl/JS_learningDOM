let output;

output = document.all;
output = document.all[10];

output = document.documentElement;
output = document.head;
output = document.body;

output = document.head.children;
output = document.body.children;

output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;

output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// document.forms[0].id = new id;

const forms = Array.from(document.forms);
forms.forEach( function(form){
    console.log(form)
});


console.log(output);