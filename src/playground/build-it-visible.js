class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state={
            visible: false
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visible: !prevState.visible
            };
        });
    }

    render(){
        return(
            <div>         
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Hide details':'Show Details'}</button>
            {this.state.visible && (
                <div>
                <p>Hey, these are some details you can now see!</p>
                </div>
            )}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById("visible"));


// let toggle = false;
// const visibleToggle = () =>{
//     toggle = !toggle;
//     renderIncall();
// };
// const vari = document.getElementById("visible");
// const renderIncall = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={visibleToggle}>{toggle ? 'Hide details':'Show details'}</button>
//             {toggle ? <p>Hey, These are some details you can see now</p>:''}
//             </div>
//         );

//         ReactDOM.render(template,visible);
// }
// renderIncall();

