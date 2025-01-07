import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
                setNumber(number + 1);
            }}>+3 (wrong)</button>
            &nbsp;
            <button onClick={() => {
                setNumber(number => number + 1);
                setNumber(number => number + 1);
                setNumber(number => number + 1);
            }}>+3 (correct)</button>
            <p>This illustrates a common mistake when trying to set state multiple times on the same variable</p>
        </>
    )
}
