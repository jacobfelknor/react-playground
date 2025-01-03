import { useState } from "react";

// This apparently is preferred by TypeScript because my typing is complete
interface Button1Props {
    startClick?: number;
    startHover: number
}
export const Button1: React.FC<Button1Props> = ({ startClick = 0, startHover }) => {
    const [count, setCount] = useState({ click: startClick, hover: startHover })
    if (count.click == 10) {
        return <>You clicked too many times! <br></br> </>
    } else {

        return (
            <>
                <button
                    onMouseEnter={() => { setCount({ click: count.click, hover: count.hover + 1 }) }}
                    onClick={() => { setCount({ click: count.click + 1, hover: count.hover }) }}
                >
                    clicked {count.click} times
                    <br></br>
                    hovered {count.hover} times
                </button>
                <br />
            </>
        )
    }
}

// This is a bit easier to read to my eye, and still Typed. 
// I moved the default value from the function args to the variable assignment
export function Button2(props: Button1Props) {
    const [count, setCount] = useState({ click: props.startClick ?? 0, hover: props.startHover })
    if (count.click == 10) {
        return <>You clicked too many times! <br></br> </>
    } else {

        return (
            <>
                <button
                    onMouseEnter={() => { setCount({ click: count.click, hover: count.hover + 1 }) }}
                    onClick={() => { setCount({ click: count.click + 1, hover: count.hover }) }}
                >
                    clicked {count.click} times
                    <br></br>
                    hovered {count.hover} times
                </button>
                <br />
            </>
        )
    }
}

// This avoids writing a dedicated interface, instead specifying the typing inline
// I think I like this best unless the data structure for these props is used in many places
export default function Button3({ startClick = 0, startHover }: { startClick?: number, startHover: number }) {
    const [count, setCount] = useState({ click: startClick, hover: startHover })
    if (count.click == 10) {
        return <>You clicked too many times! <br></br> </>
    } else {

        return (
            <>
                <button
                    onMouseEnter={() => { setCount({ click: count.click, hover: count.hover + 1 }) }}
                    onClick={() => { setCount({ click: count.click + 1, hover: count.hover }) }}
                >
                    clicked {count.click} times
                    <br></br>
                    hovered {count.hover} times
                </button>
                <br />
            </>
        )
    }
}