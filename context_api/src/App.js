import './App.css';
import {ColorBox} from './context/ThemedBox'
import {ColorContext} from './context/Color'

function App() {
  return (
    <div>
      <ColorBox></ColorBox>
      <ColorContext.Provider value={{color:"yellow"}}>
        <ColorBox></ColorBox>
      </ColorContext.Provider>
      <ColorContext.Provider value={{color:"red"}}>
        <ColorBox></ColorBox>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
