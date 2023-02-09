import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Salas from './pages/Salas';
import Solici from './pages/Solici';

function App() {
  return (
    <>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}/>
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/salas' element={<Salas />}/>
            <Route path='/solici' element={<Solici />}/>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
