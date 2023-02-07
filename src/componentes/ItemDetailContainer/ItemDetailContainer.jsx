import React, { useEffect, useState } from 'react'
import { gFetch } from '../../utils/gFetch'



export const ItemDetailContainer = () => {
  const [productos, setProductos ] =useState([])  //para hacer la resp persistente 
  
  useEffect(() => {
    gFetch()
    .then(res => {   
      setProductos(res)
    })
    .catch(error => console.log(error))

  },[])
  console.log(productos)

  return(
    <div>
      {productos.map(productos => <div key ={productos.id} className= 'card w-20 mt-3'>
                                    <div className='card-header'>
                                      <img src='{producto.foto}' alt='img' className='w-50'/> 
                                    </div>
                                    <div className='card-body'>
                                    {productos.name}
                                    </div>
                                    <div className='card-footer'>
                                      <li>
                                      {productos.categoria}
                                      </li>
                                        
                                      $ {productos.precio}

                                    </div>

                                    
                                    </div>
        )}
    </div>
  )

   
  
}



export default ItemDetailContainer






