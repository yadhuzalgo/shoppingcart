import logo from './logo.svg';
import './App.css';
import View from './Components/View';
import Nav from './Components/Nav';
import Add from './Components/Add';

function App() {
  return (
    <div className="App">
      <Add/>
      <Nav/>
      <View/>
    </div>
  );
}

export default App;
