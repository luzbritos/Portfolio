// import logo from './logo.svg';
import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import { Skills } from './components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Skills/>
    </div>
  );
}

export default App;
// https://www.youtube.com/watch?v=hYv6BM2fWd8&t=15s