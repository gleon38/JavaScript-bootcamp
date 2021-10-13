import { useState } from "react";
import reactDom from "react-dom";
import "./styles.css";

const App = () => {
    // const [left, setLeft] = useState(0)
    // const [rigth, setRight] = useState(0)

    const [counters, setCounters] = useState({
        left : 0,
        right : 0
    });

    const handleClickLeft = () => {
        setCounters({
            left : counters.left + 1,
            right : counters.right
        });
    };

    const handleClickRight = () => {
        setCounters({
            right : counters.right + 1,
            left : counters.left
        });
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
        </div>
    )
}

const rootElement = document.getElementById("root");

reactDom.render(<App />, rootElement);