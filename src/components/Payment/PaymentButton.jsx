import React from 'react';
import axios from 'axios';
import loadRazorpay from '../../utils/loadRazorpay';

import '../Home.css';
// import PaymentSuccess from './PaymentSuccess';

const PaymentButton = () => {
  const handlePayment = async () => {
    const res = await loadRazorpay();
    if (!res) {
      alert('Razorpay SDK failed to load.');
      return;
    }
    
    
    // Call backend to create order
    const order = await axios.post('http://localhost:5000/api/payment/create-order', {
      amount: 50000, // Amount in rupees
    });

    const options = {
      key: 'rzp_test_a37WC3vAZgyDuJ', // Replace with your Razorpay key
      amount: order.data.amount,
      currency: order.data.currency,
      name: 'VedArambh',
      description: 'Course Purchase',
      order_id: order.data.id,
      handler: async function (response) {
        // {
        //   <PaymentSuccess/>
        // }
        alert('Payment Successful!');
        console.log(response);
        // Optionally call backend to verify signature
      },
      prefill: {
        name: 'Chandan Yajee',
        email: 'chandan@gmail.com',
        contact: '7370057723',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <button className='paybutton' onClick={handlePayment}>Pay ₹50000</button>;
};

export default PaymentButton;
