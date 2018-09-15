// const obj = {
//     name : "Manjit",
//     getName(){
//        return this.name;
//     }
// };
// const getName = obj.getName.bind({name: "Kilke"});

// console.log(getName());
// class MouseTracker extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleMouseMove = this.handleMouseMove.bind(this);
//       this.state = { x: 0, y: 0 };
//     }
  
//     handleMouseMove(event) {
//       this.setState({
//         x: event.clientX,
//         y: event.clientY
//       });
//     }
  
//     render() {
//       return (
//         <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
//           <h1>Move the mouse around!</h1>
//           <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
//         </div>
//       );
//     }
//   }
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state={
            options:[
                'Thing One',
                'Thing Two',
                'Thing Three'
            ]
        };
    }

    handleDeleteOptions(){
        this.setState(() =>{
            return {
                options: []
            };
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum];
        alert(option);
    }
    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        return (
            <div>
            <Header title = {title} subtitle = {subTitle}/>
            <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
            <Options 
                option = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                />
            <AddOption/>
            </div>
        );
    }
}

class Header extends React.Component{
render(){
    return (
        <div>
        <h1>{this.props.title} </h1>
        <h2>{this.props.subtitle}</h2>
        </div>
    );
}
}

class Action extends React.Component {
    render(){
     return (
        <div>
        <button
         onClick={this.props.handlePick}
         disabled={!this.props.hasOptions}
         >
         What Should I Do?
         </button>
        </div>
    );
}
}

class Options extends React.Component {
    render(){
        return(
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove all</button>
            {this.props.option.map((option) => <Option key={option} optionText={option}/>)}
            </div>
            
        );
    }
}

class Option extends React.Component {
    render(){
        return(
          <div><p>Option: {this.props.optionText}</p></div>           
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        let value = e.target.elements.option.value.trim();
        if(value){
            alert(value);
        }      
    }
    render() {
        return(
            <div>AddOption Component here
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>,document.getElementById('app'));