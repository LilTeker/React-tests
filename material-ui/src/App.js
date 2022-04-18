import logo from './logo.svg';
import './App.css';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

function VolumeSlider() {
  return (
    <div>
      <Slider aria-label='volume' defaultValue={50} onChange={() => console.log("Carmen cochina")}/>
      

      {/* <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack> */}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <VolumeSlider/> 
    </div>
  );
}

export default App;
