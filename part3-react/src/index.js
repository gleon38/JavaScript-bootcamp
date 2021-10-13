import { useState } from "react";
import reactDom from "react-dom";
import "./styles.css";

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [rigth, setRight] = useState(0)

    const [counters, setCounters] = useState({
        left: 0,
        right: 0,
        clicks: 0,
        mensaje: 'Mensaje en el estado'
    });
    const[clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        const newCounterState = {
            ...counters,
            left : counters.left + 1,
            clicks : counters.clicks + 1
        }
        setCounters(newCounterState);
        setClicks(prevClicks => ([...prevClicks, 'L']))
    };

    const handleClickRight = () => {
        const newCounterState = {
            ...counters,
            right : counters.right + 1,
            clicks : counters.clicks + 1
        }
        setCounters(newCounterState);
        setClicks(prevClicks => ([...prevClicks, 'R']))
    };

    return (
        <div>
            {counters.left}
            <button onClick = {handleClickLeft}>
                left
            </button>
            <button onClick = {handleClickRight}>
                rigth
            </button>
            {counters.right}
            <p>Clicks totales: {clicks.length}</p>
            {clicks.join(", ")}
        </div>
    )
}

const rootElement = document.getElementById("root");

reactDom.render(<App />, rootElement);