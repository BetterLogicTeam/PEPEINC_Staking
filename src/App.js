import logo from './logo.svg';
import './App.css';
import ResponsiveDrawer from './Components/ResponsiveDrawer/ResponsiveDrawer';
import {
  useCallback,
  useEffect,
  useState
} from 'react';
import Stake from './Components/Stake/Stake';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import { Route, Routes } from 'react-router-dom';
import loadder from "./assets/SQvzY.gif";
import { Toaster } from 'react-hot-toast';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  const [count, setCount] = useState(0);
  const [IsActive, setIsActive] = useState(window.location.pathname);



  useEffect(() => {
    // console.log("URL", window.location.pathname);

    let url = window.location.pathname;
    setIsActive(url);

    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, [IsActive]);

  return (
    <div className="App" >
       <Toaster />
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
    
    



      </div>
      );
}

      export default App;