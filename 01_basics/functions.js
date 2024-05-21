const js_user =
{
    name: "Hammad",
    age : 23,
    email : "hammad@google.com",
    city : "Islamabad",
    loggedIn : false,
}

// console.log(js_user.name);
// console.log(js_user["email"]);

// Object.freeze(js_user);
js_user.email = "Hammad@gmail.com"
// console.log(js_user["email"]);

//Functions

// js_user.greeting = function()
// {
//     console.log("Hello World");
// }

// js_user.greetingtwo = function()
// {
//     console.log('Hello World , ${this.email}');
// }

// console.log(js_user.greeting());
// console.log(js_user.greetingtwo());

// const tinder = {}

// tinder.name = "Hammad"
// tinder.id  = "12233"
// tinder.loggedIn = false 

const user = [
    {
        id : 1,
        email : "Hammad@gmail.com"
    },
    {
        id : 1,
        email : "Hammad@gmail.com"
    },
    {
        id : 1,
        email : "Hammad@gmail.com"
    },
]

user[1].email
// console.log(tinder);

// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));

const tinder = {}

tinder.name = "hammad"
tinder.id = "2422"
tinder.loggedIn = false 

console.log(tinder)

const newry =[
    {
        name: "Hammad",
        id : 12234 
    },
    {
        name: "Hammad",
        id : 12234 
    },
    {
        name: "Hammad",
        id : 12234 
    },
]

console.log(Object.keys(tinder));