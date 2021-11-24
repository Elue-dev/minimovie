import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';
import { Home } from './Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route  exact path='/' element={<Home />} />
        <Route exact path='/movie' element={<MovieList/>} />
          <Route path='/movie/:movieId' element={<MovieDetails/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
