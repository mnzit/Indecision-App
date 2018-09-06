class IndecisionApp extends React.Component {
    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return(
            <div>
            <Header title={title}  subtitle={subTitle}/>
            <Action/>
            <Options option={options}/>
            <AddOption/>
            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        // console.log(this.props);
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert("handle pick")
    } 

    render(){
        return (
            <div>
            <button onClick={this.handlePick}>What should I do?</button>
            
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll(){
        alert("removed all")
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}>RemoveAll</button>
            {this.props.option.map(option => <Option key={option} optionText={option}/> )}
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
            {this.props.optionText}
            </div>
        )
    }
}
class AddOption extends React.Component {
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
            // e.target.elements.option.value="";
            alert(option);
        }
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));