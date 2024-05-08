"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
                <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{product.title}</div>
                        <p className="text-gray-700 text-base">{product.description}</p>
                        <div className="flex items-center mt-2">
                            {product.rating ? (
                                <span className="ml-2 text-gray-600 text-sm">
                                    {product.rating.rate} ({product.rating.count} yorum)
                                </span>
                            ) : (
                                <span className="ml-2 text-gray-600 text-sm">Rating bilgisi yok</span>
                            )}
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {product.price.toFixed(2)} TL
                        </span>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                            Sepete Ekle
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
