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
            }}>+3 batched (wrong)</button>
            &nbsp;
            <button onClick={() => {
                // if I were to add the following line, we'd end up adding 4 to the count
                // because number gets set to 1 (0 + 1) before we add the functions to the queue
                // setNumber(number + 1)
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                setNumber(n => n + 1);
                // if I were to add the following line, we'd revert back to the incorrect +1 behavior
                // because these operations are handled in a queue, and the last set wins
                // setNumber(number + 1)
            }}>+3 batched (correct)</button>
            <p>This illustrates a common mistake when trying to set state multiple times on the same variable</p>
            <p>
                Setting state only changes it for the <i>next render</i>,
                so the variable <code>number</code> doesn't get updated between <code>setNumber()</code> calls
            </p>
            <p>
                You can think of each <code>setState()</code> function as pushing an item to a queue, and
                React only re-renders the component once <i>all</i> code has ran for an event handler.
                In this case, all three <code>setNumber()</code> calls get added to this queue.
            </p>
        </>
    )
}
