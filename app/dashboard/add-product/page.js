"use client";

import React, { useState } from "react";
import { Check, Plus } from "lucide-react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import axiosPublic from "@/app/Hooks/useAxiosPublic";
import Swal from "sweetalert2";


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
    size: [],
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

  // handle size input

  const handleSizeChange = (e) => {
    const { value, checked } = e.target;

    setFormData((prev) => {
      if (checked) {
        // add size to array
        return { ...prev, size: [...prev.size, value] };
      } else {
        // remove size from array
        return { ...prev, size: prev.size.filter((s) => s !== value) };
      }
    });
  }

  // handle submit


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Product Submitted:", formData);

    try {
      const response = await axiosPublic.post("/add-product", formData);

      if (response.data?.success) {
        formData.images=[]
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: response.data.message || "Product added successfully.",
          confirmButtonColor: "#3085d6",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message || "Something went wrong!",
          confirmButtonColor: "#d33",
        });
      }
    } catch (error) {
      console.error("Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to add product.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className=" bg-[#fdfbf7] text-black p-6">
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
        className="grid grid-cols-1 lg:grid-cols-12"
      >
        {/* Left Section */}
        <div className="lg:col-span-8 bg-white rounded-xl shadow-md p-6 mb-5">
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
              <div className="mb-4">
                <label className="block font-medium mb-1">Available Sizes</label>
                <div className="flex flex-wrap gap-4">
                  {availableSizes.map((size) => (
                    <label key={size} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={size}
                        checked={formData.size.includes(size)}
                        onChange={handleSizeChange}
                        className="w-4 h-4"
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>
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
        <div className="lg:col-span-4 bg-white rounded-xl shadow-md p-6 flex flex-col  gap-5 lg:ml-5">
          {/* <h2 className="text-lg font-semibold mb-4">{formData.images.length === 0 ? "Upload Img" : "Uploaded Image"}</h2> */}
          <div className="flex flex-wrap mb-4 gap-3 ">

            {formData.images.map((img, i) => (
              <div key={i} className="relative w-[120px] h-[120px]">
                <Image
                  src={img}
                  alt={`Uploaded ${i}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="rounded shadow object-cover"
                />

              </div>
            ))}
          </div>

          <div>
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
                    className="bg-[var(--button-color)] px-4 py-2 rounded-lg text-white cursor-pointer"
                  >
                    Upload Images
                  </button>
                )}
              </CldUploadWidget>
            }
          </div>


          <select
            name="category"
            onChange={handleChange}
            className="w-full border-0 outline-0 p-2 rounded-md bg-[var(--dashboard-bg)] mt-10"
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

