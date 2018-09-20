
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            options:[]
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

    handleAddOption(option){
        if (!option){
            return 'Enter Valid value to add item';
        }else if (this.state.options.indexOf(option) > -1){
            return "This option already exists";
        }
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat([option])
            }
        });
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
            <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}
const Header = (props) => {
    return(
        <div>
        <h1>{props.title} </h1>
        <h2>{props.subtitle}</h2>
        </div>
    );
};

// class Header extends React.Component{
// render(){
//     return (
//         <div>
//         <h1>{this.props.title} </h1>
//         <h2>{this.props.subtitle}</h2>
//         </div>
//     );
// }
// }

const Action = (props) =>{
    return (
        <div>
        <button
         onClick={props.handlePick}
         disabled={!props.hasOptions}
         >
         What Should I Do?
         </button>
        </div>
    );
};

// class Action extends React.Component {
//     render(){
//      return (
//         <div>
//         <button
//          onClick={this.props.handlePick}
//          disabled={!this.props.hasOptions}
//          >
//          What Should I Do?
//          </button>
//         </div>
//     );
// }
// }
const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {props.option.map((option) => <Option key={option} optionText={option}/>)}
        </div>
        
    );
};
// class Options extends React.Component {
//     render(){
//         return(
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//             {this.props.option.map((option) => <Option key={option} optionText={option}/>)}
//             </div>
            
//         );
//     }
// }
const Option = (props) => {
    return(
        <div><p>Option: {props.optionText}</p></div>           
      );
};
// class Option extends React.Component {
//     render(){
//         return(
//           <div><p>Option: {this.props.optionText}</p></div>           
//         );
//     }
// }

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        let value = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(value);
        this.setState(()=>{
            return{
             error: error
            }
        })
        
    }
    render() {
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        );
    }
}

// const User = (props) =>{
//     return (
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     )
// }
ReactDOM.render(<IndecisionApp />,document.getElementById('app'));