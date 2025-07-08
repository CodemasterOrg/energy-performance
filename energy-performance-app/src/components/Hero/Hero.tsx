import type { FC } from "react";
import video from '../../assets/Video_Energy_Windmill.mp4'
import './Hero.css'
import { Typewriter } from 'react-simple-typewriter';
 

const Hero: FC = () => (
  <div className="hero">
    <video src={video} autoPlay loop muted />
    <div className="content">
     <h1>
         Energize your company with{' '}
        <span style={{ color: '#ffffff' }}>
          <Typewriter
            words={['wind', 'solar', 'water', 'bio', 'wind']} 
            loop={1} 
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2500}
            cursor
            cursorStyle="|"
          />
        </span>
      </h1>
    </div>
  </div>
);

export default Hero;
