import "./App.css";
import {motion} from "framer-motion/dist/framer-motion";

function App() {
  return (
    <div className="App">
      <motion.form 
          initial={{ 
            x: [0],
            opacity: 0 
          }}
          animate={{
              x: [50, 0],
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.5, 0.5, 0.5, 0.5]
            }}
            >
        <h1>Create An Account</h1>
        <label>
          Email:
          <input name="email" type="email" required />
        </label>
        <label>
          Password:
          <input name="password" type="password" required />
        </label>
        <button>Sign Up!</button>
      </motion.form>
    </div>
  );
}

export default App;
