import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './components/Create';
import Main from './components/Main';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import Error from './components/Error';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note/" element={<Note />} />
          <Route path="/note/:noteURL" element={<Note />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
