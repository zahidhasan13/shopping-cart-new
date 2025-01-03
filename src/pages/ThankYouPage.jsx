import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="md:py-16 min-h-96">
      <div className="bg-sky-50 p-4 rounded-md  w-96 md:w-[500px] mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-3">
          Thank You for Your Order.
        </h3>
        <Link to="/products">
          <button className="btn-secondary uppercase">Continue shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
