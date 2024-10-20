import Button from '../generic/Button';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import Panel from '../generic/Panel';

import { useState, useEffect, useRef } from 'react';

const Countdown = () => {
    const [inputMinutes, setInputMinutes] = useState(0);
    const [inputSeconds, setInputSeconds] = useState(0);
    const [totalMilliseconds, setTotalMilliseconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<number | null>(null);

    // Display time functions
    const getMinutes = () => {
        if (totalMilliseconds === 0 && !isRunning) {
            return 0;
        }
        if (isRunning || totalMilliseconds > 0) {
            return Math.floor(totalMilliseconds / 60000);
        }
        return inputMinutes;
    };

    const getSeconds = () => {
        if (totalMilliseconds === 0 && !isRunning) {
            return 0;
        }
        if (isRunning || totalMilliseconds > 0) {
            return Math.floor((totalMilliseconds % 60000) / 1000);
        }
        return inputSeconds;
    };

    const getHundredths = () => {
        if (isRunning) {
            return Math.floor((totalMilliseconds % 1000) / 10);
        }
        return 0;
    };

    // Reset timer function
    const resetTimer = () => {
        setIsRunning(false);
        setIsPaused(false);
        const resetTotalMilliseconds = (inputMinutes * 60000) + (inputSeconds * 1000);
        setTotalMilliseconds(resetTotalMilliseconds);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    // Countdown function
    const tick = () => {
        setTotalMilliseconds((prevMilliseconds) => {
            if (prevMilliseconds > 0) {
                return prevMilliseconds - 10;
            } else {
                resetTimer();
                return 0;
            }
        });
    };

    // Start timer function
    const startTimer = () => {
        if (!isRunning) {
            const startTotalMilliseconds = (inputMinutes * 60000) + (inputSeconds * 1000);
            setTotalMilliseconds(startTotalMilliseconds);
            setIsRunning(true);
            setIsPaused(false);
            intervalRef.current = window.setInterval(tick, 10);
        }
    };

    // Pause timer function
    const pauseTimer = () => {
        setIsPaused(true);
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    // Resume timer funciton
    const resumeTimer = () => {
        if (isPaused) {
            setIsPaused(false);
            intervalRef.current = window.setInterval(tick, 10);
        }
    };

    // Fast forward timer function
    const fastForwardTimer = () => {
        setTotalMilliseconds(0);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsRunning(false);
        setIsPaused(false);
    };

    // Input change for minutes and seconds functions
    const handleMinutesChange = (minutes: number) => {
        setInputMinutes(minutes);
        if (!isRunning) {
            setTotalMilliseconds((minutes * 60000) + (inputSeconds * 1000));
        }

    };

    const handleSecondsChange = (seconds: number) => {
        setInputSeconds(seconds);
        if (!isRunning) {
            setTotalMilliseconds((inputMinutes * 60000) + (seconds * 1000));
        }
    };

    // Clear interval on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <Panel 
            title="Countdown" 
            description="A timer that counts down from X amount of time (e.g. count down to 0, starting at 2 minutes and 30)"
            >

            <div className="w-full flex justify-center">
                <DisplayTime 
                    minutes={getMinutes()}
                    seconds={getSeconds()}
                    hundredths={getHundredths()} />
            </div>

            <div className="w-full flex justify-center">
                <Input 
                    minutes={inputMinutes} 
                    seconds={inputSeconds} 
                    onMinutesChange={handleMinutesChange} 
                    onSecondsChange={handleSecondsChange}
                    disabled={isRunning || isPaused} 
                />
            </div>
           
            <div className="flex flex-col w-full space-y-4">
                {isRunning && !isPaused ? (
                    <Button type="pause" onClick={pauseTimer} />
                ) : isRunning && isPaused ? (
                    <Button type="resume" onClick={resumeTimer} />
                ) : (
                    <Button type="start" onClick={startTimer} />
                )}

                <Button type="reset" onClick={resetTimer} />
                <Button type="fastforward" onClick={fastForwardTimer} />
            </div>
        </Panel>
    );
};

export default Countdown;
