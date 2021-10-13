import { useState } from "react";
import reactDom from "react-dom";
import "./styles.css";

const App = () => {
    const [left, setLeft] = useState(0)
    const [rigth, setRight] = useState(0)

    return (
        <div>
            {left}
            <button onClick = {() => setLeft(left + 1)}>
                left
            </button>
            <button onClick = {() => setRight(rigth + 1)}>
                rigth
            </button>
            {rigth}
        </div>
    )
}

const rootElement = document.getElementById("root");

reactDom.render(<App />, rootElement);