console.log("App.js is running!");

// JSX - JavaScript XML
const appObj = {
    title: 'This is the One',
    subTitle: 'I am subtitle',
    options: ['One', 'Two']
};
const template = (
<div>
    <h1>{appObj.title}</h1>
    {appObj.subTitle && <p>{appObj.subTitle}</p>}
    <p>{appObj.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
    <ol>
    <li>Item one</li>
    <li>Item two</li>
    </ol>
</div>
);
const appRoot = document.getElementById('app');
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
let count = 0;
// const someId = 'myidhere'
const addOne = () => {
    console.log('AddOne')
}
const minusOne = () => {
    console.log('MinusOne');
}
const reset = () => {
    console.log('Reset');
}
const templateTwo = (
<div>
<h1>Count: {count}</h1>
<button onClick={addOne}>+1</button>
<button onClick={minusOne}>-1</button>
<button onClick={reset}>reset</button>
</div>
);

console.log(templateTwo);

const app2Root = document.getElementById('app2');
ReactDOM.render(templateTwo,app2Root);
