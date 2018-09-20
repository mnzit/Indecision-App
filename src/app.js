
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state={
            options:props.options
        };
    }

    handleDeleteOptions(){
        this.setState(() => ({ options:[]}));
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optionToRemove !== option)
        }));
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
        this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }


    render(){
        const subTitle = 'Put your life in the hands of a computer';
        return (
            <div>
            <Header subtitle = {subTitle}/>
            <Action hasOptions={this.state.options.length>0} handlePick={this.handlePick}/>
            <Options 
                option = {this.state.options}
                handleDeleteOptions = {this.handleDeleteOptions}
                handleDeleteOption = {this.handleDeleteOption}
                />
            <AddOption handleAddOption = {this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return(
        <div>
        <h1>{props.title} </h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

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

const Options = (props) => {
    return(
        <div>
        <button onClick={props.handleDeleteOptions}>Remove all</button>
        {
            props.option.map((option) => (
                <Option 
                key={option} 
                optionText={option}
                handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
        </div>
        
    );
};

const Option = (props) => {
    return(
        <div><p>Option: {props.optionText}</p>
        <button 
        onClick={(e) => {
            props.handleDeleteOption(props.optionText)
        }}
        >Remove
        </button>
        </div>           
      );
};

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
        this.setState(() => ({error}));      
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