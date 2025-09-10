import { useState } from 'react'
import './App.css'

//Creamos el menú de navegación
function NavBar() {
  return (
    <nav className='navbar'>
      <a href='#inicio'>Inicio</a>
      <a href='#contacto'>Contacto</a>
    </nav>
  )
}

//Creamos el Inicio
function Inicio() {
  return (
    <section id='inicio' className='section'>
      <h1>Bienvenido a mi Landing Page de Prueba</h1>
      <div>
        <img src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen de Inicio" className='imagen-inicio' />
        <p>Esta es la seccion de Inicio de la Página</p>
      </div>
    </section>
  )
}

//Creamos el Contacto
function Contacto() {
  return (
    <section id='contacto' className='section'>
      <h2>Contacto</h2>
      <form className='formulario'>
        <input type='text' placeholder='Nombre' required />
        <input type='email' placeholder='Email' required />
        <textarea placeholder='Mensaje' required></textarea>
        <button type='submit'>Enviar</button>
      </form>
    </section>
  )
}

//Componente para agregar elementos a una lista
function Lista() {

  const [items, setItems] = useState([])
  const [input, setInput] = useState('')

  const agregarItems = () => {
    if (input.trim() !== '') {
      setItems([...items, input])
      setInput('')
    }
  }
 
  return (
    <section className='section'>
      <h2>Lista de ideas</h2>
      <div className='list-form'>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Escribe una idea' 
        />
        <button onClick={agregarItems}>Agregar</button>
      </div>
      <ul>
        {items.map((item, index) =>
          <li key={index}>{item}</li>
        )}
      </ul>
    </section>
  )
}

function App() {

  return (
    <>
      <NavBar />
      <Inicio />
      <Contacto />
      <Lista />
    </>
  )

}

export default App
