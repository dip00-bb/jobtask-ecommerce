"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosPublic from "../Hooks/useAxiosPublic";


const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axiosPublic.get("/all-product");
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-5">
                All <span className="text-[var(--highlight-color)] ">Products</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((product) => (

                    <div
                        key={product._id}
                        className="rounded-xl shadow-md p-4 flex flex-col space-y-4"
                    >
                        {/* Product Image */}
                        <div className="relative w-full h-48">
                            <Image
                                src={product.images[0] || "/placeholder.jpg"}
                                alt={product.name}
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>

                        {/* Product Info */}
                        <h2
                            className="mt-3 text-lg font-semibold"
                            style={{ color: "var(--highlight-color)" }}
                        >
                            {product.name}
                        </h2>
                        <div className="flex items-center justify-between gap-4 mb-4">
                            {/* Price */}
                            <p className="text-gray-600 font-medium">${product?.basePrice}</p>

                            {/* Sizes */}
                            <div className="flex gap-2">
                                {product?.size?.map((s, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 border rounded-md text-sm text-gray-700"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Details Button */}
                        <Link href={`/product/${product._id}`}>
                            <button
                                className="w-full py-2 rounded cursor-pointer text-white font-medium"
                                style={{ backgroundColor: "var(--button-color)" }}
                            >
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;
