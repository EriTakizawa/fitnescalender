import { Component } from "react";
import fitnesicon from './fitnesicon.jpg'

export class FitnessCalender extends Component{
    
    state ={
        userInput: '',
        fitnessActivities: []
    }
    
    onChangeEvent(e){
       this.setState ({userInput:e});
        console.log(e)
    }

    addItem(input){
        if (input === ""){
            alert("Please enter your fitness activity for today!")
        }
        else{
        let listArray = this.state.fitnessActivities;
        listArray.push(input);
        this.setState({fitnessActivities: listArray, userInput: ''})
        console.log(listArray)
    }
}
    colorChange(event){
        const li = event.target;
        li.classList.toggle("yellow")
    }

    deleteItem(){
        let listArray = this.state.fitnessActivities;
        listArray = [];
        this.setState({fitnessActivities:listArray})
    }

    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return <div>
            <form onSubmit = {this.onFormSubmit}>
    <div className="parent">
            <table>
                <tr>
                  <th>Monday</th>
                </tr>
                <tr>
                  <td><input type="text" placeholder="Write your fintness activity for today?" 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                    <ul>
                        {this.state.fitnessActivities.map((item,index) => (
                            <li onClick={this.colorChange} key={index}>
                                <img src={fitnesicon} width="30px"/>
                                {item}</li>
                        ))}
                    <button onClick={() => this.addItem(this.state.userInput)}>Add</button>    
                    <button onClick={() => this.deleteItem(this.state.userInput)}>Delete</button>    
                    </ul>
                    </td>
                    
                    </tr>
            </table>
        </div>
        </form>
    </div>
    }
}
