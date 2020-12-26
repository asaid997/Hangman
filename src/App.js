import logo from './logo.svg';
import './App.css';
import Solution from './components/Solution'
import Score from './components/Score'
import Letters from './components/Letters'
import Letter from './components/Letter'
import 'materialize-css/dist/css/materialize.css'

function App() {
  return (
    <div className="row">
          <Score />
          <Solution />
          <Letters />
          <Letter />
    </div>
  );
}

export default App;
