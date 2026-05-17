import { Link } from 'react-router-dom'

function Menu() {
  return (
    <nav id="menu">
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/atividade3">Atividade 3</Link></li>
        <li><Link to="/atividade4">Atividade 4</Link></li>
        <li><Link to="/atividade5">Atividade 5</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/painel">Painel</Link></li>
      </ul>
    </nav>
  )
}

export default Menu