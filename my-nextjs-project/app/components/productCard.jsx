"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Tüm ürünleri almak için genel bir API çağrısı
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log("API Response:", response.data);
                setProducts(response.data);
                setLoading(false);
            } catch (err) {
                setError('Ürünler yüklenirken bir sorun oluştu.');
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Yükleniyor...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
            <div key={product.id} className="relative max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <button className="absolute top-0 right-0 m-2 text-gray-400 hover:text-red-500 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <img 
                    className="w-full h-64 object-contain rounded-lg"
                    src={product.image}
                    alt={product.title}
                />
                <div className="p-4">
                    <div className="font-bold text-xl mb-2">{product.title}</div>
                    <p className="text-gray-700 text-base">{product.description.substring(0, 100)}...</p>
                    <div className="flex items-center mt-2">
                        {product.rating ? (
                            <>
                            <FaStar className="text-yellow-500" />
                            <span className="ml-2 text-gray-600 text-sm">
                                {product.rating.rate} ({product.rating.count} yorum)
                            </span>
                            </>
                        ) : (
                            <span className="ml-2 text-gray-600 text-sm">Rating bilgisi yok</span>
                        )}
                    </div>
                </div>
                <div className="px-4 pb-4">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                        {product.price.toFixed(2)} TL
                    </span>
                    <button className="mt-auto bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        Sepete Ekle
                    </button>
                </div>
            </div>
        ))}
    </div>
    );
};

export default ProductList;
