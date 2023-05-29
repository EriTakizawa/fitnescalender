import { Component } from "react";
import fitnesicon from './fitnesicon.jpg'

export class WeekFourMonday extends Component{
    
    state ={
        userInput: '',
        fitnessActivities: []
    }
    
    onChangeEventWeekFourMonday(e){
       this.setState ({userInput:e});
        console.log(e)
    }

    addItemWeekFourMonday(input){
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

    deleteItemWeekFourMonday(){
        let listArray = this.state.fitnessActivities;
        listArray = [];
        this.setState({fitnessActivities:listArray})
    }

    onFormSubmitWeekFourMonday(e){
        e.preventDefault();
    }
    render(){
        return <div>
            <form onSubmit = {this.onFormSubmitWeekFourMonday}>
    <div className="parent">
            <table>
                <tr>
                  
                </tr>
                <tr>
                  <td><input type="text" placeholder="Write your fitness activity for today?" 
                    onChange={(e) => {this.onChangeEventWeekFourMonday(e.target.value)}}
                    value={this.state.userInput}/>
                    <ul>
                        {this.state.fitnessActivities.map((item,index) => (
                            <li onClick={this.colorChange} key={index}>
                                <img src={fitnesicon} width="30px"/>
                                {item}</li>
                        ))}
                    <button onClick={() => this.addItemWeekFourMonday(this.state.userInput)}>Add</button>    
                    <button onClick={() => this.deleteItemWeekFourMonday(this.state.userInput)}>Delete</button>    
                    </ul>
                    </td>
                    
                    </tr>
            </table>
        </div>
        </form>
    </div>
    }
}