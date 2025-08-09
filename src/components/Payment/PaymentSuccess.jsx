// src/pages/PaymentSuccess.js
import React from "react";
import { useLocation } from "react-router-dom";

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const orderId = query.get("order_id");
  const txStatus = query.get("tx_status");

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">
        Payment {txStatus === "SUCCESS" ? "Successful" : "Failed"}
      </h2>
      <p className="mt-4">Order ID: {orderId}</p>
    </div>
  );
};

export default PaymentSuccess;
