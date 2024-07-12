import AnalogClock from "../component/AnalogClock";
import SpeedSlider from "../component/SpeedSlider";
import { useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

import '../styles/Tracking.css'




const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};



const Tracking = () => {
   const query = useQuery();
   const initialSpeed = query.get('speed') ? Number(query.get('speed')) : 1;
   const [speed, setSpeed] = useState(initialSpeed);
    useEffect(() => {
      setSpeed(initialSpeed);
    }, [initialSpeed]);
  return (
    
      <div className='tracking-wrapper'>
        <div className='header'>
          <h1>Tracking Page</h1>
        </div>
        <div>
          <AnalogClock speed={speed} />
        </div>
        <div className="slider">
          <SpeedSlider speed={speed} setSpeed={setSpeed} />
        </div>
      </div>
   
  );
}

export default Tracking