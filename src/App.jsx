import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Particles from "react-tsparticles";
import ResponsiveDrawer from './Components/ResponsiveDrawer/ResponsiveDrawer';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ComingSoon from './Components/ComingSoon/ComingSoon';
import Stake from './Components/Stake/Stake';

// import { loadFull } from "tsparticles";
function App() {
  const [count, setCount] = useState(0)

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <>
    <BrowserRouter>
    <div className="scrollbar">
          <ResponsiveDrawer />
        </div>
          <Routes>
      <Route exact path="/" element={<ComingSoon />} />
      <Route exact path="/Stake" element={<Stake />} />
          </Routes>
          </BrowserRouter>
    </>
  )
}

export default App
