


let productos = [
    {id:'1', categoria: 'Alimento Seco', name:"Alimento Excellent Perro Adulto",precio:  10825, foto: 'https://www.mivetshop.com.ar/media/catalog/product/cache/f45fac214c5ee5bb0b2a50e4e7188992/7/6/7613035337817-1_1.jpg'},
    {id:'2', categoria: 'Alimento Seco', name:"Alimento Excellent Perro Pequeño",precio: 10825, foto: 'https://www.mivetshop.com.ar/media/catalog/product/cache/f45fac214c5ee5bb0b2a50e4e7188992/7/6/7613035337817-1_1.jpg'},
    {id:'3', categoria: 'Alimento Seco', name:"Alimento Excellent Perro Mediano",precio:  10825, foto: 'https://images.app.goo.gl/bxvCKqX9wXNU7cwm6'},
]

export const gFetch = () => {
    return new Promise ((res, rej) =>{
        setTimeout(()=>{
            res( productos)
        },1000)
    })
}

    



