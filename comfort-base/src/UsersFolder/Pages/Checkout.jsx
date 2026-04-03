import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        🛒 Checkout
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Billing Details */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Billing Details
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full"
            />
            <input
              type="text"
              placeholder="Address"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="City"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none flex-1"
              />
              <input
                type="text"
                placeholder="ZIP / Postal Code"
                className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none flex-1"
              />
            </div>
            <input
              type="text"
              placeholder="Country"
              className="border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none w-full"
            />
          </form>
        </div>

        {/* Cart Summary */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700">
            Order Summary
          </h3>

          <div className="flex flex-col gap-4">
            {/* Cart Item */}
            <div className="flex justify-between items-center p-3 rounded-lg border border-gray-200 hover:shadow-md transition duration-300">
              <span className="text-gray-700 font-medium">Red Cap x 2</span>
              <span className="font-semibold text-gray-900">₦3000</span>
            </div>

            <div className="flex justify-between items-center p-3 rounded-lg border border-gray-200 hover:shadow-md transition duration-300">
              <span className="text-gray-700 font-medium">Spicy Sauce x 1</span>
              <span className="font-semibold text-gray-900">₦1200</span>
            </div>
          </div>

          <div className="flex justify-between font-bold text-lg mt-6 border-t border-gray-200 pt-4">
            <span>Total:</span>
            <span>₦4200</span>
          </div>

          <button className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold">
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;