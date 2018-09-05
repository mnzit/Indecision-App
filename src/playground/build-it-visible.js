let toggle = false;
const visibleToggle = () =>{
    toggle = !toggle;
    renderIncall();
};
const vari = document.getElementById("visible");
const renderIncall = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={visibleToggle}>{toggle ? 'Hide details':'Show details'}</button>
            {toggle ? <p>Hey, These are some details you can see now</p>:''}
            </div>
        );

        ReactDOM.render(template,visible);
}
renderIncall();

