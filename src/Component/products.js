import React, { useState, useEffect } from 'react';
import './header/header.css';
import { Link } from 'react-router-dom';

function Products() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(json => setProduct(json));
    }, []);

    return (
        <div className="d-flex justify-content-center gap-4 my-4 align-content-start flex-wrap">
            {product.map((v) => (
                <Link key={v.id} to={`/${v.id}`} className="text-decoration-none text-dark">
                    <div className="card h-100 shadow" style={{ width: "18rem", minHeight: "420px" }}>
                        <div className="card-body d-flex flex-column align-items-center text-center">
                            <img src={v.image} alt={v.title} className="mb-3" style={{ width: "140px", height: "150px", objectFit: "contain" }} />
                            <h5 className="card-title">{v.title.length > 40 ? v.title.slice(0, 40) + "..." : v.title}</h5>
                            <p className="card-text">{v.category}</p>
                            <p className="card-text fw-bold">${v.price}</p>
                            <p className="card-text">⭐ {v.rating?.rate}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Products;
