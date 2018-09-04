let count = 0;
// const someId = 'myidhere'
const addOne = () => {
    count++;
    // console.log('AddOne')
    renderCounterApp()
}
const minusOne = () => {
    count--;
    // console.log('MinusOne');
    renderCounterApp()
}
const reset = () => {
    count = 0;
    // console.log('Reset');
    renderCounterApp()
}

const app2Root = document.getElementById('app2');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        </div>
        );
        ReactDOM.render(templateTwo,app2Root);
};

renderCounterApp();

// Virtual DOM Algorithm
// Minimal changes