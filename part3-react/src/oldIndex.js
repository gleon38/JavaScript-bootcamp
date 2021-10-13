import ReactDOM from 'react-dom';
import { useState } from 'react';
const rootElement = document.getElementById("root");

const Counter = ({ number }) => {
  return <h1>{number}</h1>
};

const App = (props) => {
  const [contador, setContador] = useState(13);
  
  const handleClick = () => {
    setContador(contador + 1);
  }

  const handleClickReset = () => {
    setContador(0);
  }

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? 'Es Par' : 'Es Impar'

  return ( 
    <div>
      <p>El valor del contador es: </p>  
      <Counter number = {contador}/>
      <p>{mensajePar}</p>
      <button onClick = {handleClick}>Incrementar</button>
      <button onClick = {handleClickReset}>Reset</button>
    </div>
  );
};

ReactDOM.render(
  <App />,
  rootElement
);
