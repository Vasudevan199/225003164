import React, { useState } from 'react';

const shoes = [
    { id: 1, name: 'Nike Air Max', price: 120, image: 'An_Adidas_shoe.jpg' },
    { id: 2, name: 'Adidas Ultraboost', price: 180, image: 'th.jpg' },
    { id: 3, name: 'Puma Running Shoes', price: 90, image: 'images/shoe3.jpg' }
];

const ShoeList = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (id) => {
        const shoe = shoes.find(shoe => shoe.id === id);
        setCart([...cart, shoe]);
        alert(`${shoe.name} has been added to the cart!`);
    };

    return (
        <div className="shoe-list">
            {shoes.map(shoe => (
                <div key={shoe.id} className="shoe-item">
                    <img src={shoe.image} alt={shoe.name} />
                    <h2>{shoe.name}</h2>
                    <p>${shoe.price}</p>
                    <button onClick={() => addToCart(shoe.id)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ShoeList;
