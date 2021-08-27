import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje.js'

function App() {
  return (
    <div className="App">
      <Mensaje message='Inicio' color='red'/>
      <Mensaje message='Estamos' color='blue'/>
      <Mensaje message='Trabajando' color='green'/>
    </div>
  );
}

export default App;
