import { useState } from "react";
import reactDom from "react-dom";
import "./styles.css";

const WarningNotUsed = () => {
    return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
    return <p>{clicks.join(", ")}</p>
}

const INITIAL_COUNTER_STATE = {
    left: 4,
    right: 2,
    mensaje: 'Mensaje en el estado'
}

const App = () => {

    const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);
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

    const handleReset = () => {
        setCounters(INITIAL_COUNTER_STATE);
        setClicks([]);
    }

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
            <p>
                <button onClick={handleReset}>reset</button>
            </p>
            <p>Clicks totales: {clicks.length}</p>
            {clicks.length === 0
                ? <WarningNotUsed />
                : <ListOfClicks clicks = {clicks} />
            }
        </div>
    )
}

const rootElement = document.getElementById("root");

reactDom.render(<App />, rootElement);