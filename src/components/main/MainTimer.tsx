import React, { useState, useEffect } from "react";
import "./mainTimer.css";
import calculateTimer from "../controls/calculateTimer";
import Controls from "../controls/controls";

function MainTimer() {
  const [clockTime, setClock] = useState("");
  const activateBreak = () => {
    return setClock(`${timerArray[0]}: ${timerArray[1]}: ${timerArray[2]}`);
  };

  const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);

  useEffect(() => {
    let timerArray: Array<number | string> = calculateTimer(timeInSeconds);
    setTimerArray(timerArray);
  }, [timeInSeconds]);

  return (
    <main>
      <section className="time-container">
        <p className="timer-text">{timerArray[0]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[1]}</p>
        <span>:</span>
        <p className="timer-text">{timerArray[2]}</p>
      </section>
      <Controls
        setTimeInSeconds={setTimeInSeconds}
        activateBreak={activateBreak}
        clockTime={clockTime}
      />
    </main>
  );
}

export default MainTimer;
