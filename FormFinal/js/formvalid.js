
$(document).ready(function(){
    $("#email_form").validate({
    rules: {
        "name": {
        required: true,
        },
     "email": {
       required:true,
       email: true, 
},
    "comment": {
        required: true,
       },
    },


messages: {
    "email":{
        required: "Please enter your email address",
        email: "Please enter a valid email address",
    },
    "name":{
        required: "Please enter your name",
    }, 
    "comment":{ 
        required: "Please enter your comments here",
        },
      },
    });
});