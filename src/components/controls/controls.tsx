import React, {useState} from 'react';
import './controls.css'

type Props ={
    setTimeInSeconds: Function,
    activateBreak: Function,
    clockTime: string
};

function Controls(props:Props) {
    const { setTimeInSeconds} = props;
    const [intevalID, setIntevalID] = useState<number>(0);
    const {activateBreak} = props;
    const {clockTime} = props;
   

    
    
    const handleClockIn = () => {
        let interval:any = setInterval(() => {
            setTimeInSeconds((previousState:number) => 
            previousState + 1);
        
        }, 1000);

        setIntevalID(interval);
    } 


    const handleBreak = () => {
        activateBreak();
        console.log('Saved time is trigger');
        console.log(clockTime);
        clearInterval(intevalID)
    }

    const handleClockOut = () => {
      
        clearInterval(intevalID);
        setTimeInSeconds(0);
        
        
    }
return (
    <section className="controls-container">
        <p>The saved time is {clockTime} </p>
        <button onClick={handleClockIn}>CLOCK IN</button>
        <button onClick={handleBreak}>Take A Break </button>
       <button onClick={handleClockOut}>CLOCK OUT</button>
    </section>
)
}

export default Controls;