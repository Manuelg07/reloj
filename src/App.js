
import './App.css';
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';
import Stopwatch from './components/Stopwatch/Stopwatch';

function App() {
  return (
  
    <div className='contenedores'>
        <div className='contenedor'>
        
          <div className='contenedor__reloj'>
            <h2 className='contenedor__titulo'>Reloj Digital</h2>
            <DigitalClock></DigitalClock>
          </div>

          <div className='contenedor__cuenta'>
            <h2 className='contenedor__titulo'>Cuenta atrás</h2>
            <Countdown></Countdown>
          </div>

          <div className='contenedor__cronometro'>
            <h2 className='contenedor__titulo'>Cronómetro</h2>
            <Stopwatch></Stopwatch>
          </div>

        </div>
    </div>
  );
}

export default App;
