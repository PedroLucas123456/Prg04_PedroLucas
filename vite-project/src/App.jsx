import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Atividade3 from './pages/Atividade3'
import Atividade4 from './pages/Atividade4'
import Atividade5 from './pages/Atividade5'
import Painel from './pages/Painel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/atividade3" element={<Atividade3 />} />
        <Route path="/atividade4" element={<Atividade4 />} />
        <Route path="/atividade5" element={<Atividade5 />} />
        <Route path="/painel" element={<Painel />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App