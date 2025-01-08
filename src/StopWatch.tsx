import { useState, useRef } from 'react';

export default function StopWatch() {
    // State should be used when we update values that *do* require re-rendering the component
    const [now, setNow] = useState<number | null>(null);
    const [startTime, setStartTime] = useState<number | null>(null);
    // Refs can be used when we update values that do not require re-rendering the component
    const isStopped = useRef<boolean>(true);
    const secondsPassed = useRef<number>(0);
    const intervalRef = useRef<number>(undefined);

    function handleStart() {

        if (isStopped) {
            setStartTime(Date.now() - (secondsPassed.current * 1000));
            setNow(Date.now());
            isStopped.current = false;

            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
                setNow(Date.now());
            }, 10);
            console.log(`started at ${secondsPassed.current}`)
        }
    }

    function handleStop() {
        clearInterval(intervalRef.current);
        isStopped.current = true
        console.log(`stopped at ${secondsPassed.current}`)
    }

    function handleReset() {
        setStartTime(null);
        setNow(null);
        isStopped.current = true
        secondsPassed.current = 0;
    }

    if (startTime != null && now != null) {
        secondsPassed.current = (now - startTime) / 1000;
    }


    return (
        <>
            <h1>Time passed: {secondsPassed.current.toFixed(3)}</h1>
            <button onClick={handleStart}>
                Start
            </button>
            <button onClick={handleStop}>
                Stop
            </button>
            <button onClick={handleReset}>
                Reset
            </button>
        </>
    );
}