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
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

const user={
    name: 'Andrew',
    age: 20,
    location: 'Philadhelphia'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }
}

const template2 = (
    <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}   
    {getLocation(user.location)}
    </div>
);

const app2Root = document.getElementById('app2');

ReactDOM.render(template2,app2Root);
