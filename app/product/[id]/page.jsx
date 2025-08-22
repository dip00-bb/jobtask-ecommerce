"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import axiosPublic from "@/app/Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosPublic.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  // Discount price calculation
  const discountedPrice =
    product.discount && product.discount > 0
      ? (product.basePrice -
          (product.basePrice * product.discount) / 100).toFixed(2)
      : product.basePrice;

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-[70vh]">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left side - Carousel */}
        <div className="w-full md:w-1/2">
          <Swiper spaceBetween={10} slidesPerView={1}>
            {product.images?.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full h-[500px]">
                  <Image
                    src={img}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right side - Details */}
        <div className="flex-1">
          <h1
            className="text-3xl font-bold mb-4"
            style={{ color: "var(--highlight-color)" }}
          >
            {product.name}
          </h1>

          {/* Price + Discount */}
          <div className="mb-4">
            {product.discount > 0 ? (
              <div className="flex items-center gap-3">
                <p className="text-2xl font-semibold text-red-600">
                  ${discountedPrice}
                </p>
                <p className="text-lg line-through text-gray-500">
                  ${product.basePrice}
                </p>
                <span className="text-sm bg-green-200 text-green-800 px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <p className="text-2xl font-semibold text-gray-800">
                ${product.basePrice}
              </p>
            )}
          </div>

          {/* Sizes */}
          {product.size?.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Available Sizes:</h3>
              <div className="flex gap-2 flex-wrap">
                {product.size.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border rounded-md cursor-pointer hover:bg-[var(--text-color)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Stock */}
          <p className="mb-2 text-gray-700">
            <span className="font-semibold">Stock:</span> {product.stock}
          </p>

          {/* Gender + Category */}
          <p className="mb-2 text-gray-700">
            <span className="font-semibold">Gender:</span> {product.gender}
          </p>
          <p className="mb-4 text-gray-700">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Buy Button */}
          <button
            className="px-6 py-3 rounded text-white font-medium w-full md:w-auto cursor-pointer"
            style={{ backgroundColor: "var(--button-color)" }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
