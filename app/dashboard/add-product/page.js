"use client";

import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

const AddProductPage = () => {
  const availableSizes = ["XS", "S", "M", "XL", "XXL"];
  const genderOptions = ["Male", "Female"];
  const discountTypes = [
    "New Year Sale",
    "Durga Puja",
    "Eid-Ul Fitor",
    "Star Sunday",
    "Budda Purnima",
  ];
  const productCategoryMen = [
    "Men T-shirt",
    "Men Jacket",
    "Men Shirt",
    "Men Pant",
  ];
  const productCategoryWomen = [
    "Women T-shirt",
    "Women Jacket",
    "Women Shirt",
    "Women Pant",
  ];

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    size: "",
    gender: "",
    basePrice: "",
    stock: "",
    discount: "",
    discountType: "",
    category: "",
    images: [],

  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // upload image to cloudinary
  const handleImageUpload = async (e, index) => {
    const file = e.target.files[0];
    console.log(file)
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "product_preset"); // your unsigned preset

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dxnz82n6g/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const cloudData = await res.json();
    console.log(cloudData)

    const updatedImages = [...formData.images];
    const updatedFileNames = [...formData.fileNames];
    updatedImages[index] = cloudData.secure_url; // save image link
    updatedFileNames[index] = file.name; // save file name

    setFormData({ ...formData, images: updatedImages, fileNames: updatedFileNames });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Submitted:", formData);
    // POST to /api/products with formData
  };
  console.log(formData)
  return (
    <div className="min-h-screen bg-[#fdfbf7] text-black p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <button
          type="submit"
          form="addProductForm"
          className="flex items-center gap-2 bg-[var(--button-color)] px-4 py-2 rounded-lg shadow-md text-white font-semibold cursor-pointer"
        >
          <Check className="w-5 h-5" /> Add Product
        </button>
      </header>

      <form
        id="addProductForm"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6"
      >
        {/* Left Section */}
        <div className="lg:col-span-9 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">General Information</h2>

          <div className="mb-4">
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)]"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)]"
              placeholder="Enter product description"
              rows={3}
              required
            />
          </div>
          <div className="flex justify-between">
            <div>
              <select
                name="gender"
                onChange={handleChange}
                className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)]"
              >
                <option value="">Select Gender</option>
                {genderOptions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                name="size"
                onChange={handleChange}
                className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)]"
              >
                <option value="">Select Size</option>
                {availableSizes.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Pricing & Stock */}
          <h2 className="text-lg font-semibold mb-4">Pricing & Stock</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-medium mb-1">Base Price</label>
              <input
                type="number"
                name="basePrice"
                min="1"
                step="any"
                onChange={handleChange}
                className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)] no-arrows"
                placeholder="Enter price"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Stock</label>
              <input
                type="number"
                name="stock"
                min="1"
                step="1"
                onChange={handleChange}
                className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)] no-arrows"
                placeholder="Available stock"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Discount (%)</label>
              <input
                type="number"
                name="discount"
                min="0"
                step="any"
                onChange={handleChange}
                className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)] no-arrows"
                placeholder="Enter discount"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Discount Type</label>
              <select
                name="discountType"
                onChange={handleChange}
                className="w-full p-2 rounded-md border-0 outline-0 bg-[var(--dashboard-bg)]"
              >
                <option value="">Select discount type</option>
                {discountTypes.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-3 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4">{formData.images.length === 0 ? "Upload Img" : "Uploaded Image"}</h2>
          <div className="flex justify-between flex-wrap mb-4 gap-10">

            {formData.images.map((img, i) => (
              <div key={i} className="relative w-50 h-50">
                <Image
                  src={img}
                  alt={`Uploaded ${i}`}
                  fill   // makes it cover the parent div
                  className="rounded shadow object-cover"
                />
              </div>
            ))}
          </div>
          {
            formData.images.length === 4 ? <p className="font-bold">4 image upload complete </p> : <CldUploadWidget
              cloudName="dxnz82n6g"
              uploadPreset="seller-product"
              options={{ multiple: true }}
              onSuccess={(result) => {
                if (result.event === "success") {
                  const uploadedUrl = result.info.secure_url;
                  setFormData((prev) => {
                    const updatedImages = [...prev.images, uploadedUrl];
                    return { ...prev, images: updatedImages };
                  });
                }
              }}
            >
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="bg-[var(--button-color)] px-4 py-2 rounded-lg text-white"
                >
                  Upload Images
                </button>
              )}
            </CldUploadWidget>
          }


          <select
            name="category"
            onChange={handleChange}
            className="w-full border-0 outline-0 p-2 rounded-md bg-[var(--dashboard-bg)]"
            required
          >
            <option value="">Select category</option>
            {(formData.gender === "Male"
              ? productCategoryMen
              : formData.gender === "Female"
                ? productCategoryWomen
                : []
            ).map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* custom CSS for removing arrows */}
      <style jsx>{`
        input[type="number"].no-arrows::-webkit-outer-spin-button,
        input[type="number"].no-arrows::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"].no-arrows {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default AddProductPage;

