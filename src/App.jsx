import { useState } from 'react'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail, { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';



function App() {
  

  return (
    <>
      <NavBar />
      <h1><ItemListContainer greeting="Bienvenidos al Pet Shop"/></h1>
      <ItemDetailContainer/>
      
    
      
    </>
  )
}

export default App
