import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartslice";

const CheckOut = () => {
  const navigate = useNavigate();
  const { email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(clearCart(email));
    navigate("/thank-you");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">Checkout</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-600"
          >
            Address:
          </label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "Address is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.address && (
            <p className="text-red-500 text-sm">{errors.address.message}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="form-group">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              {...register("city", { required: "City is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-600"
            >
              State:
            </label>
            <input
              type="text"
              id="state"
              {...register("state", { required: "State is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-600"
            >
              Zip Code:
            </label>
            <input
              type="text"
              id="zip"
              {...register("zip", { required: "Zip Code is required" })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.zip && (
              <p className="text-red-500 text-sm">{errors.zip.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="form-group">
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Card Number:
            </label>
            <input
              type="text"
              id="cardNumber"
              {...register("cardNumber", {
                required: "Card Number is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm">
                {errors.cardNumber.message}
              </p>
            )}
          </div>
          <div className="form-group">
            <label
              htmlFor="expiryDate"
              className="block text-sm font-medium text-gray-600"
            >
              Expiry Date:
            </label>
            <input
              type="text"
              id="expiryDate"
              placeholder="MM/YY"
              {...register("expiryDate", {
                required: "Expiry Date is required",
              })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">
                {errors.expiryDate.message}
              </p>
            )}
          </div>
        </div>
        <div className="form-group">
          <label
            htmlFor="cvv"
            className="block text-sm font-medium text-gray-600"
          >
            CVV:
          </label>
          <input
            type="text"
            id="cvv"
            {...register("cvv", { required: "CVV is required" })}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          />
          {errors.cvv && (
            <p className="text-red-500 text-sm">{errors.cvv.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Order Confirm
        </button>
      </form>
    </div>
  );
};

export default CheckOut;
