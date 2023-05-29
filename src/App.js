
import './App.css';
import { FitnessCalender } from './FitnessCalender';
import { WeekOneSunday } from './WeekOneSunday';
import { WeekOne} from './WeekOne';
import { WeekOneTuesday } from './WeekOneTuesday';
import { WeekOneWednesday } from './WeekOneWednesday';
import { WeekOneThursday } from './WeekOneThursday';
import { WeekOneFriday } from './WeekOneFriday';
import { WeekOneSaturday } from './WeekOneSaturday';

import { WeekTwo} from './WeekTwo';
import { WeekTwoMonday} from './WeekTwoMonday';
import { WeekTwoTuesday } from './WeekTwoTuesday';
import { WeekTwoWednesday } from './WeekTwoWednesday';
import { WeekTwoThursday } from './WeekTwoThursday';
import { WeekTwoFriday } from './WeekTwoFriday';
import { WeekTwoSaturday } from './WeekTwoSaturday';
import { WeekTwoSunday } from './WeekTwoSunday';

import { WeekThree} from './WeekThree';
import { WeekThreeMonday} from './WeekThreeMonday';
import { WeekThreeTuesday } from './WeekThreeTuesday';
import { WeekThreeWednesday } from './WeekThreeWednesday';
import { WeekThreeThursday } from './WeekThreeThursday';
import { WeekThreeFriday } from './WeekThreeFriday';
import { WeekThreeSaturday } from './WeekThreeSaturday';
import { WeekThreeSunday } from './WeekThreeSunday';

import { WeekFour} from './WeekFour';
import { WeekFourMonday} from './WeekFourMonday';
import { WeekFourTuesday } from './WeekFourTuesday';
import { WeekFourWednesday } from './WeekFourWednesday';
import { WeekFourThursday } from './WeekFourThursday';
import { WeekFourFriday } from './WeekFourFriday';
import { WeekFourSaturday } from './WeekFourSaturday';
import { WeekFourSunday } from './WeekFourSunday';


function App() {
  return (
  <div className="container">

    <div className="heading">
        <h1>Workout planner</h1>
    </div> 
      
      <div className="box">
      <WeekOne/>
      <FitnessCalender/>
      <WeekOneTuesday/>
      <WeekOneWednesday/>
      <WeekOneThursday/>
      <WeekOneFriday/>
      <WeekOneSaturday/>
      <WeekOneSunday/>
      </div>
      
      <div className="boxOne">
      <WeekTwo/>
      <WeekTwoMonday/>
      <WeekTwoTuesday/>
      <WeekTwoWednesday/>
      <WeekTwoThursday/>
      <WeekTwoFriday/>
      <WeekTwoSaturday/>
      <WeekTwoSunday/>
      </div>

      <div className="boxTwo">
      <WeekThree/>  
      <WeekThreeMonday/>
      <WeekThreeTuesday/>
      <WeekThreeWednesday/>
      <WeekThreeThursday/>
      <WeekThreeFriday/>
      <WeekThreeSaturday/>
      <WeekThreeSunday/>
      </div> 

      <div className="boxThree">
      <WeekFour/>
      <WeekFourMonday/>
      <WeekFourTuesday/>
      <WeekFourWednesday/>
      <WeekFourThursday/>
      <WeekFourFriday/>
      <WeekFourSaturday/>
      <WeekFourSunday/>
      </div>
 </div>
  
  );
}

export default App;
