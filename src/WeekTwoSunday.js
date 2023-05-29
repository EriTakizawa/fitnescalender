import { Component } from "react";
import fitnesicon from './fitnesicon.jpg'

export class WeekTwoSunday extends Component{
    
    state ={
        userInput: '',
        fitnessActivities: []
    }
    
    onChangeEventWeekTwoSunday(e){
       this.setState ({userInput:e});
        console.log(e)
    }

    addItemWeekTwoSunday(input){
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

    deleteItemWeekTwoSunday(){
        let listArray = this.state.fitnessActivities;
        listArray = [];
        this.setState({fitnessActivities:listArray})
    }

    onFormSubmitWeekTwoSunday(e){
        e.preventDefault();
    }
    render(){
        return <div>
            <form onSubmit = {this.onFormSubmitWeekTwoSunday}>
                <table>
                    
                    <tr>
<td>
    <input type="text" placeholder="Write your fitness activity for today?" 
                    onChange={(e) => {this.onChangeEventWeekTwoSunday(e.target.value)}}
                    value={this.state.userInput}/>
                    <ul>
                        {this.state.fitnessActivities.map((item,index) => (
                            <li onClick={this.colorChange} key={index}>
                                <img src={fitnesicon} width="30px"/>
                                {item}</li>
                        ))}
                    <button onClick={() => this.addItemWeekTwoSunday(this.state.userInput)}>Add</button>    
                    <button onClick={() => this.deleteItemWeekTwoSunday(this.state.userInput)}>Delete</button>    
                    </ul>
</td> 
</tr>
</table>
</form>
</div>
    }
}
    