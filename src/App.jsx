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
          {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  onHover: {
                    enable: false,
                    mode: "repulse",
                  },
                  resize: false,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ADE900",
                },
                backgroundMask: {
                  color: "red",
                  distance: 120,
                  enable: false,
                  opacity: 0,
                  width: "100%",
                },
                collisions: {
                  enable: false,
                },
                move: {
                  directions: "right",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
                },
                number: {
                  density: {
                    enable: false,
                    area: 1200,
                  },
                  value: 20,
                },
                opacity: {
                  value: 0.1,
                },
                // zIndex:{
                //   value: -9
                // },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 50 },
                },
              },
              detectRetina: true,
            }}
          /> */}
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
