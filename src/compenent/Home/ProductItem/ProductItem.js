import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';

const ProductItem = () => {
    const [item, setItem] = useState([])
    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])

    return (
        <section id="ProductItem">
            <div className="container">
                <h3 className="text-center  text-primary mt-5 mb-5">Products</h3>
                <div className="row mt-5 mb-5" style={{marginTop: '2.5rem', justifyContent: 'center'}}>

                    {
                        item.length === 0 && 
                        <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                        </div>
                    }

                    {
                        item.map(pd => <ProductList key={pd._id} pd={pd} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default ProductItem;