import { useState } from "react";
import axios from "axios";

function PaymentForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/create-payment-link", form);
      const paymentLink = res.data.payment_link;

      if (paymentLink) {
        window.location.href = paymentLink;
      } else {
        alert("Failed to create payment link");
      }
    } catch (error) {
      console.error(error);
      alert("Error creating payment link");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Make a Payment</h2>
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full mb-2 p-2 border" />
      <input name="amount" placeholder="Amount (INR)" onChange={handleChange} className="w-full mb-2 p-2 border" />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Pay Now</button>
    </div>
  );
}

export default PaymentForm;
