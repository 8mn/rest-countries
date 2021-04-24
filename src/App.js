import Home from '../src/components/Home/Home'
import {
  BrowserRouter as Router
} from "react-router-dom"


function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
