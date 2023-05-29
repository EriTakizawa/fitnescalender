import { Component } from "react";
import fitnesicon from './fitnesicon.jpg'

export class WeekOneTuesday extends Component{
    
    state ={
        userInput: '',
        fitnessActivities: []
    }
    
    onChangeEventWeekOneTuesday(e){
       this.setState ({userInput:e});
        console.log(e)
    }

    addItemWeekOneTuesday(input){
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

    deleteItemWeekOneTuesday(){
        let listArray = this.state.fitnessActivities;
        listArray = [];
        this.setState({fitnessActivities:listArray})
    }

    onFormSubmitWeekOneTuesday(e){
        e.preventDefault();
    }
    render(){
        return <div>
            <form onSubmit = {this.onFormSubmitWeekOneTuesday}>
                <table>
                    <th>Tuesday</th>
                    <tr>
<td>
    <input type="text" placeholder="Write your fitness activity for today?" 
                    onChange={(e) => {this.onChangeEventWeekOneTuesday(e.target.value)}}
                    value={this.state.userInput}/>
                    <ul>
                        {this.state.fitnessActivities.map((item,index) => (
                            <li onClick={this.colorChange} key={index}>
                                <img src={fitnesicon} width="30px"/>
                                {item}</li>
                        ))}
                    <button onClick={() => this.addItemWeekOneTuesday(this.state.userInput)}>Add</button>    
                    <button onClick={() => this.deleteItemWeekOneTuesday(this.state.userInput)}>Delete</button>    
                    </ul>
</td> 
</tr>
</table>
</form>
</div>
    }
}