import './App.css';
import Form from './components/Form';
import {GiDuck} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{padding:'20px', color:'yellow', fontSize:'50px', fontFamily:'inherit'}}>
          <sapn>face</sapn>
          <GiDuck/>
        </div>
        <Form/>
      </header>
    </div>
  );
}

export default App;
