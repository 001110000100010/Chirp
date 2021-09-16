import './App.css';
import Header from './components/Header';
import Content from './components/Content';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Content />
    </div>
  );
}

export default App;
