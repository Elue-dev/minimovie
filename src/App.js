import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { MovieList } from './MovieList';
import { MovieDetails } from './MovieDetails';
import { Footer } from './Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<MovieList/>} />
          <Route path='/:id' element={<MovieDetails/>} />
      </Routes>
    </div>
    <Footer />
    </Router>
  );
}

export default App;
