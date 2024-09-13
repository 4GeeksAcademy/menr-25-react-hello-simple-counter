import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondsCounter";
import Button from "./button";

const Home = () => {
    const [isRunning, setIsRunning] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        } 
        return () => clearInterval(interval);
    }, [isRunning]);

    const resetCounter = () => {
        setCounter(0);
        setIsRunning(true);
    };

    const six = Math.floor(counter / 100000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter % 10);

    return (
      <div className="container text-center">
        <div className="d-flex flex-row mb-3 justify-content-center bg-black ms-3 me-3 mt-3">
            <SecondsCounter text={<i className="fa-regular fa-clock"></i>} />
            <SecondsCounter text={six} />
            <SecondsCounter text={five} />
            <SecondsCounter text={four} />
            <SecondsCounter text={three} />
            <SecondsCounter text={two} />
            <SecondsCounter text={one} />
        </div>

        <div>
            <Button 
                onClick={() => setIsRunning(false)}
                customClass="btn btn-danger" 
                text="Stop" 
            />
            <Button 
                onClick={() => setIsRunning(true)} 
                customClass="btn btn-success"
                text="Start" 
            />
            <Button 
                onClick={resetCounter} 
                customClass="btn btn-secondary"
                text="Reset" 
            />
        </div>
      </div>
    );
};

export default Home;