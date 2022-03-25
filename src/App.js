import './App.css';
import Navbar from './components/Navbar';
import {Hero, About, WorkedAt, WorkedOn, Contact, Footer} from './containers/index'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <WorkedAt/>
      <WorkedOn/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
