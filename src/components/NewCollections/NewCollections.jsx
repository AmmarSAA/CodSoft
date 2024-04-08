import React from "react";
import "./NewCollections.css";
import Card from "../Card/Card";
import solid_gold_petite_micropaveImage from "./../assets/newCollection/solid_gold_petite_micropave.jpg";
import mens_casual_premium_slim_fit_t_shirtsImage from "./../assets/newCollection/mens_casual_premium_slim_fit_t-shirts.jpg";
import mens_cotton_jacketImage from "./../assets/newCollection/mens_cotton_jacket.jpg";
import danvouyImage from "./../assets/newCollection/danvouy.jpg";
import opnaImage from "./../assets/newCollection/opna.jpg";

const NewCollections = () => {
    const categories = ["men's clothing", "jewelry", "women's clothing"];

    // Predefined list of 5 new collections for each category
    const newCollections = [
        {
            id: 1,
            category: "men's clothing",
            title: "Mens Casual Premium Slim Fit T-Shirts",
            price: 22.30,
            image: mens_casual_premium_slim_fit_t_shirtsImage,
        },
        {
            id: 2,
            category: "men's clothing",
            title: "Mens Cotton Jacket",
            price: 55.99,
            image: mens_cotton_jacketImage,
        },
        {
            id: 3,
            category: "women's clothing",
            title: "DANVOUY Womens T Shirt Casual Cotton Short",
            price: 12.99,
            image: danvouyImage,
        },
        {
            id: 4,
            category: "women's clothing",
            title: "Opna Women's Short Sleeve Moisture",
            price: 7.95,
            image: opnaImage,
        },
        {
            id: 5,
            category: "jewelry",
            title: "Solid Gold Petite Micropave",
            price: 40,
            image: solid_gold_petite_micropaveImage,
        },
    ];

    return (
        <div className="new-collections">
            <h1 className="text-center">NEW COLLECTIONS</h1>
            <hr />
            <div className="collections row justify-content-center">
                {/* Render static list of 5 new collections for each category */}
                {categories.map((category) => (
                    <div key={category} className="col-lg-3 col-md-6 col-sm-12 mb-4 m-4 ms-2 p-2 ps-0">
                        <h5 className="text-center h5">{category.toUpperCase()}</h5>
                        <div className="collection-items d-flex flex-column align-items-center">
                            {/* Filter and map products based on category */}
                            {newCollections
                                .filter((product) => product.category === category)
                                .slice(0, 5) // Limit to 5 items per category
                                .map((product) => (
                                    <Card key={product.id} details={product} />
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
