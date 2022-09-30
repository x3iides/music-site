import './scss/styles.js';
import './App.css';
import Hero from "./components/Hero.js";
import MonoCreators from './components/MonoCreators.js';
import Listing from './components/Listing.js';

function App() {
  return (
    <div className="landing">
      <Hero/>
      <MonoCreators />
      <Listing />
    </div>
  );
}

export default App;
