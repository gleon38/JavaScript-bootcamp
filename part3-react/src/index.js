import { useState } from "react";
import reactDom from "react-dom";
import "./styles.css";

const WarningNotUsed = () => {
    return <h1>Todavía no se ha usado el contador</h1>
}

const ListOfClicks = ({clicks}) => {
    return <p>{clicks.join(", ")}</p>
}

const App = () => {

    const[clicks, setClicks] = useState([])

    const handleClickLeft = () => {
        setClicks(prevClicks => ([...prevClicks, 'L']))
    };

    const handleClickRight = () => {
        setClicks(prevClicks => ([...prevClicks, 'R']))
    };

    const handleReset = () => {
        setClicks([]);
    }

    const left = clicks.filter(click => click === 'L')
    const right = clicks.filter(click => click === 'R')
    
    return (
        <div>
            {left.length}
            <button onClick = {handleClickLeft}>
                left
            </button>
            <button onClick = {handleClickRight}>
                rigth
            </button>
            {right.length}
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