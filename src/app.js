console.log("App.js is running!");

// JSX - JavaScript XML
const appObj = {
    title: 'This is the One',
    subTitle: 'I am subtitle',
    options: []
};

const removeAll = () =>{
    appObj.options = [];
    render();
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        appObj.options.push(option);
        e.target.elements.option.value='';
        render();
    } 
};

const appRoot = document.getElementById('app');

const number = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{appObj.title}</h1>
            {appObj.subTitle && <p>{appObj.subTitle}</p>}
            <p>{appObj.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
            <p>{appObj.options.length}</p>
            <button onClick={removeAll}>Remove all</button>
            {
               number.map((number) =>{
                   return <p key={number}>Number: {number}</p>
               })
            }
            <ol>
           {appObj.options.map((items)=>{
               return <li key={items}>{items}</li>
           })}
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
        </div>
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



