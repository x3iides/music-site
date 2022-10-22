import './scss/styles';
import Hero from './components/Hero';
import MonoCreators from './components/MonoCreators';
import Listing from './components/Listing';

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
