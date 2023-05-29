import { Component } from "react";
import fitnesicon from './fitnesicon.jpg'

export class WeekThreeMonday extends Component{
    
    state ={
        userInput: '',
        fitnessActivities: []
    }
    
    onChangeEventWeekThreeMonday(e){
       this.setState ({userInput:e});
        console.log(e)
    }

    addItemWeekThreeMonday(input){
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

    deleteItemWeekThreeMonday(){
        let listArray = this.state.fitnessActivities;
        listArray = [];
        this.setState({fitnessActivities:listArray})
    }

    onFormSubmitWeekThreeMonday(e){
        e.preventDefault();
    }
    render(){
        return <div>
            <form onSubmit = {this.onFormSubmitWeekThreeMonday}>
    <div className="parent">
            <table>
                <tr>
                  
                </tr>
                <tr>
                  <td><input type="text" placeholder="Write your fitness activity for today?" 
                    onChange={(e) => {this.onChangeEventWeekThreeMonday(e.target.value)}}
                    value={this.state.userInput}/>
                    <ul>
                        {this.state.fitnessActivities.map((item,index) => (
                            <li onClick={this.colorChange} key={index}>
                                <img src={fitnesicon} width="30px"/>
                                {item}</li>
                        ))}
                    <button onClick={() => this.addItemWeekThreeMonday(this.state.userInput)}>Add</button>    
                    <button onClick={() => this.deleteItemWeekThreeMonday(this.state.userInput)}>Delete</button>    
                    </ul>
                    </td>
                    
                    </tr>
            </table>
        </div>
        </form>
    </div>
    }
}
