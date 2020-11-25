import logo from './logo.svg';
import './App.css';
import TopBar from './components/Topbar'
import ProductTable from './components/ProductTable'

function App() {
  return (
    <div className="App">
    <TopBar name={"Product Manager"}/>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         it's alive
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <ProductTable/>
    </div>
  );
}

export default App;
