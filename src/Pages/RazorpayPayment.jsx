import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

const RazorpayPayment = () => {
  const handlePayment = async () => {
    try {
      const options = {
        key: 'rzp_live_WMe1owLANjWhPZ', // Replace with your Razorpay API key
        amount: 100, // Amount in the smallest currency unit (e.g., paise for INR)
        currency: 'INR',
        name: 'Nilesh Dubey',
        description: 'Buy a coffee',
        handler: function (response) {
          document.getElementById('coffee_gift_modal').showModal();
          console.log('Payment ID:', response.razorpay_payment_id);
          console.log('Signature:', response.razorpay_signature);
          // You can handle the payment response as needed, e.g., send to backend for verification
        },
        prefill: {
          name: 'Nilesh Dubey',
          email: 'nileshdubey060@gmail.com',
          contact: '+916267751993'
        }
      };

      // Initialize Razorpay instance and open payment modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error during Razorpay integration:', error);
      alert('Failed to initiate Razorpay payment. Please try again later.');
    }
  };
  
  return (
    <div>
     <dialog id="coffee_gift_modal" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Thank You for the Coffee Gift!</h3>
    <p className="py-4">I appreciate your thoughtful gesture. Press ESC key or click outside to close this dialog.</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Close</button>
  </form>
</dialog>

      <button onClick={handlePayment} className='text-black bg-white p-2 rounded-md'>Pay ₹50</button>
    </div>
  );
};

export default RazorpayPayment;
