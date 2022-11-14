import { createRoot } from 'react-dom/client';
import './App.css';
import Home from "./Home"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)

export default App;
