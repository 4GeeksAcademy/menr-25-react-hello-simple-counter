import React, { useState, useEffect } from "react";
import SecondsCounter from "./secondsCounter";
import Button from "./button";

const Home = ({ digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix }) => {
    const [isRunning, setIsRunning] = useState(true); // Estado para manejar si el contador está en ejecución
    const [counter, setCounter] = useState(0); // Estado para el contador

    // useEffect para manejar el temporizador
    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        } 
        return () => clearInterval(interval); // Limpiar el intervalo cuando se detenga
    }, [isRunning]);  // Solo se ejecuta cuando `isRunning` cambia

    // Función para reiniciar el contador
    const resetCounter = () => {
        setCounter(0);
        setIsRunning(false);  // Detener el contador al reiniciar
    };

    // Cálculo de los dígitos
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

        {/* Renderizamos los botones de control */}
        <div>
            <Button 
                onClick={() => setIsRunning(false)} 
                text="Stop" 
            />
            <Button 
                onClick={() => setIsRunning(true)} 
                text="Start" 
            />
            <Button 
                onClick={resetCounter} 
                text="Reset" 
            />
        </div>
      </div>
    );
};

export default Home;