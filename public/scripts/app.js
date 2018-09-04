'use strict';

console.log("App.js is running!");

// JSX - JavaScript XML
var appObj = {
    title: 'This is the One',
    subTitle: 'I am subtitle',
    options: []
};

var removeAll = function removeAll() {
    appObj.options = [];
    render();
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        appObj.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

var appRoot = document.getElementById('app');

var render = function render() {
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
            'p',
            null,
            appObj.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
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
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();

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
