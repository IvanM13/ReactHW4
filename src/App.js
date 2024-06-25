import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import FormComponent from './components/FormPage';
import Catalog from './components/Catalog';
import Contacts from './components/Contacts';

function App() {
  const home = 'Главная';
  const about = 'О нашей компании';
  return (
    <div className='App'>
      <Router>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Link to="/"><Button>Главная</Button> </Link>
          <Link to="/catalog"><Button>Каталог</Button></Link>
          <Link to="/about"><Button>O нас</Button></Link>
          <Link to="/contacts"><Button>Контакты</Button></Link>
          <Link to="/form"><Button>Оставить заявку</Button></Link>

        </ButtonGroup>

        <Routes>
          <Route path="/" element={<HomePage articles={home} />} />

          <Route path="/about" element={<AboutPage articles={about} />} />
          <Route path='/form' element={<FormComponent />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;