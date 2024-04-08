import React, { useEffect, useState } from 'react'
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ details }) => {

    const [cardText, setCardText] = useState(false);

    useEffect(() =>{
        const getWidth = window.innerWidth;
        if (getWidth <= 500) {
            setCardText(true);
        }
    },[])

    return (
        <div className='item'>
            <Link to={`/products/${details.id}`}><img src={details.image} className='card-img' /></Link>
            <p>
                {
                    cardText ? (
                        details.title.length > 30 ? details.title.substring(0,30) + '...' : details.title
                    ) : (
                        details.title.length > 45 ? details.title.substring(0,44) + '...' : details.title
                    )
                }
            </p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${Math.floor(details.price - 5)}
                </div>
                <div className="item-price-old">
                    ${details.price}
                </div>
            </div>
        </div>
    )
}

export default Card
