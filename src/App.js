import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AboutMe from './components/AboutMe';

function App() {


  const particlesInit = async (main) => {
    console.log(main);
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };


  
  return (
    <>
    
    <Particles className='particles-canvas'
    id="tsparticles"
    init={particlesInit}
    options={{
      "fullScreen": {
          "enable": true,
          "zIndex":1
      },
      "particles": {
          "number": {
              "value": 10,
              "density": {
                  "enable": false,
                  "value_area": 900
              }
          },
          "color": {
              "value": "#fff"
          },
          "shape": {
              "type": "circle",
              "options": {
                  "sides": 5
              }
          },
          "opacity": {
              "value": 50,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed":3,
                  "opacity_min": 1,
                  "sync": false
              }
          },
          "size": {
              "value": 4,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "rotate": {
              "value": 0,
              "random": true,
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 600,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
             
          }
      },
   
      "retina_detect": true,
      "background": {
          
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
  }}
  />
    
    <Navbar />
    <Header />
    <AboutMe />

    </>
  );
}

export default App;





