import './App.css';
import {motion} from 'framer-motion'

import croissant from './assets/croissant.jpg'

function App() {
  return (
    <div className="App">
      <motion.div 
        className="card"
        initial={{scale:0}}
        animate={{scale:1}}
        whileHover={{
          y: -15,
          transition: { duration: .3 },
          cursor: "pointer",
          boxShadow: "0px 15px 10px rgba(0,0,0,0.56)",
        }}
        whileTap={{
          scale: 0.9,
          border: "3px solid #ebae3e",
        }}
      >
        <img src={croissant}/>
        <div className='text-content'>
          <h2>Do you like croissant ?</h2>
          <p>The latest thing to have caused fear for people in Poland is a croissant. The French, crescent-shaped roll made of flaky pastry scared some residents in the Polish city of Krakow. They mistook the pastry for a kind of dangerous animal. </p>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
