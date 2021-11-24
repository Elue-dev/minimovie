import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MovieList/>} />
          <Route path='/movie/:movieId' element={<MovieDetails/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
