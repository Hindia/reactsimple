import React,{Component} from 'react';
import {Form} from 'reactstrap';

var myPerson= {'id': 'hin', 'name':'hindia'};
class Person extends Component{

    render(){
        var aPerson={...this.state.person};
        
        return(
                       
            <div>
                <h2>person component here. Finland is the happiest country</h2>
                <h1>Hi {myPerson.name} and {aPerson.name}, it's working!</h1>
                <Form><input type="text" name ="name" value={aPerson.name} onChange={this.handleChange} ></input></Form> 
            </div>
        )
    }

    constructor(props){
        super(props);
        this.state={
            person:{},
            loading:false
        }
        //listens to changes in the input field
        this.handleChange= this.handleChange.bind(this);
    }
    async componentDidMount(){
        //reads the myperson.json from public folder
        //await two times to fetch and to parse it to json
        const personRemote = await (await fetch('myPerson.json')).json();
        //overrides the state of person in the constructor method
        this.setState({person:personRemote});
    }

    handleChange(event) {
        const target = event.target;    //what ui component caused the event
        const value = target.value;     //What is the new value
        const name = target.name;       //What data needs to be updated (here person.name)
        let aPerson = {...this.state.person};    //variable to refer to member variable
        aPerson[name] = value;                  //add the value of name for the json object
        this.setState({person:aPerson});        //Update the member variable status
    }

}
export default Person;