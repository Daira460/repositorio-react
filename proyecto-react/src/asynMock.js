const products = [
    {
        id: '1',
        name: 'Pantalon Cargo 208 Black',
        price: 15000,
        category: 'pantalones',
        img: 'https://flammashop.com.ar/wp-content/uploads/2023/03/208-Black.webp',
        stock: 40,
        description: 'talle 40',
    },
    {
        id: '2',
        name: 'Remera Bad Rules',
        price: 12000,
        category: 'remeras',
        img: 'https://flammashop.com.ar/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-07-at-19.15.27-1.jpeg',
        stock: 25,
        description: 'talle L',
    
    },
    {
     id: '3',
     name: 'Pelusos',
     price: 5000,
     category: 'accesorios',
     img: 'https://flammashop.com.ar/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-21-at-18.11.58.jpeg',
     stock: 15,
     description: 'talle unico',

    },
]
export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (products)
        },600)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve (products.find(prod => prod.id === productId))
        },600)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === category);
        resolve(filteredProducts);
      }, 600)
    });
  };