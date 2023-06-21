import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Particles from "react-tsparticles";
import ResponsiveDrawer from "./Components/ResponsiveDrawer/ResponsiveDrawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComingSoon from "./Components/ComingSoon/ComingSoon";
import Stake from "./Components/Stake/Stake";
import loadder from "./assets/SQvzy.gif";


// import { loadFull } from "tsparticles";
function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [count, setCount] = useState(0);
  const [IsActive, setIsActive] = useState(window.location.pathname);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  useEffect(() => {
    console.log("URL", window.location.pathname);
   
    let url = window.location.pathname;
    setIsActive(url);

    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [IsActive]);

  return (
    <>
    {isLoading == true ? (
      <div className="scrollbar">
        <ResponsiveDrawer setIsActive={setIsActive} IsActive={IsActive} />
      
      <Routes>
        <Route exact path="/Seed_Sales" element={<ComingSoon />} />
        <Route exact path="/Presales" element={<ComingSoon />} />
        <Route exact path="/Token_Generator" element={<ComingSoon />} />
        <Route exact path="/Portfolio" element={<ComingSoon />} />
        <Route exact path="/Stats" element={<ComingSoon />} />
        <Route exact path="/Docs" element={<ComingSoon />} />
        <Route exact path="/ComingSoon" element={<ComingSoon />} />

        <Route exact path="/" element={<Stake />} />
      </Routes>
      </div>
      ) : (
        <>
        <div className="main_loADER">
            <div className="Loader_bg">
              <img src={loadder} className="img-fluid" alt="" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
