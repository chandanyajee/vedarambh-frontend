const handlePayment = async () => {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load");
    return;
  }

  const result = await fetch("http://localhost:5000/api/payment/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amount: 500 }) // ₹500
  });

  const { order } = await result.json();

  const options = {
    key: "YOUR_PUBLIC_KEY", // Razorpay Dashboard se
    amount: order.amount,
    currency: "INR",
    name: "VedArambh",
    description: "Course Payment",
    order_id: order.id,
    handler: (response) => {
      alert("Payment Successful! ID: " + response.razorpay_payment_id);
      // Backend pe verify bhi kar sakte ho
    },
    prefill: {
      name: "Chandan Yajee",
      email: "yajee@example.com",
      contact: "9876543210"
    },
    theme: { color: "#1E88E5" }
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
