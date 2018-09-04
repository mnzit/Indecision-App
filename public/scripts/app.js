'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML
var appObj = {
    title: 'This is the One',
    subTitle: 'I am subtitle',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        appObj.title
    ),
    appObj.subTitle && React.createElement(
        'p',
        null,
        appObj.subTitle
    ),
    React.createElement(
        'p',
        null,
        appObj.options.length > 0 ? 'Here are your options' : 'No Options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

// const user={
//     name: 'Andrew',
//     age: 20,
//     location: 'Philadhelphia'
// }

// function getLocation(location){
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const template2 = (
//     <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}   
//     {getLocation(user.location)}
//     </div>
// );

// const app2Root = document.getElementById('app2');
// ReactDOM.render(template2,app2Root);
var count = 0;
// const someId = 'myidhere'
var addOne = function addOne() {
    count++;
    // console.log('AddOne')
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    // console.log('MinusOne');
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    // console.log('Reset');
    renderCounterApp();
};

var app2Root = document.getElementById('app2');

var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(templateTwo, app2Root);
};

renderCounterApp();
