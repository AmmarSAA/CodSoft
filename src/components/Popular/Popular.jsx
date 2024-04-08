import React from 'react';
import './Popular.css';
import Card from '../Card/Card';
import biylaclesenImage from './../assets/popular/biylaclesen.jpg';
import mbjImage from "./../assets/popular/mbj.jpg";
import rain_jacketImage from "./../assets/popular/rain_jacket.jpg";
import lock_n_loveImage from './../assets/popular/lock_n_love.jpg';

const Popular = () => {

    const products = [
        { id: 1, category: "women's clothing", title: "BIYLACLESEN Women's 3-in-1", price: 56.99, image: biylaclesenImage },
        { id: 2, category: "women's clothing", title: "Lock and Love Women's Removable Hooded Faux", price: 29.95, image: lock_n_loveImage },
        { id: 3, category: "women's clothing", title: "Rain Jacket Women Windbreaker Striped Climbi", price: 39.99, image: rain_jacketImage },
        { id: 4, category: "women's clothing", title: "MBJ Women's Solid Short Sleeve Boat Neck V", price: 9.85, image: mbjImage },
    ];

    const popularInWomen = products.filter((product) => product.category === "women's clothing");

    return (
        <div className='popular'>
            <h1>POPULAR IN STORE</h1>
            <hr />
            <div className="popular-item">
                {
                    popularInWomen.map((prod, index) => (
                        index < 4 && <Card key={prod.id} details={prod} />
                    ))
                }
            </div>
        </div>
    );
}

export default Popular;
