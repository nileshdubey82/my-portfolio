import React from "react";
import "react-toastify/dist/ReactToastify.css";

const RazorpayPayment = () => {
  const RAZORPAY_KEY = import.meta.env.VITE_API_KEY;
  const userName = import.meta.env.VITE_NILESH;
  console.log(JSON.stringify(import.meta.env, null, 2))
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    try {
      const options = {
        key: RAZORPAY_KEY, // Replace with your Razorpay API key
        amount: 10000, // Amount in the smallest currency unit (e.g., paise for INR)
        currency: "INR",
        name: "Nilesh Dubey",
        description: "Buy a coffee",
        handler: function (response) {
          document.getElementById("coffee_gift_modal").showModal();
          console.log("Payment ID:", response.razorpay_payment_id);
          console.log("Signature:", response.razorpay_signature);
          // You can handle the payment response as needed, e.g., send to backend for verification
        },
        prefill: {
          name: "Nilesh Dubey",
          email: "nileshdubey060@gmail.com",
          contact: "+916267751993",
        },
      };

      // Initialize Razorpay instance and open payment modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error during Razorpay integration:", error);
      alert("Failed to initiate Razorpay payment. Please try again later.");
    }
  };

  return (
    <div>
      <dialog id="coffee_gift_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Thank You for the Coffee Gift!</h3>
          <p className="py-4">
            I appreciate your thoughtful gesture. Press ESC key or click outside
            to close this dialog.
          </p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Close
          </button>
        </form>
      </dialog>

      <button onClick={handlePayment} className="">
        <img src="/Images/gift.png" className="w-[50px] h-[100%]" alt="Gift" />
      </button>
    </div>
  );
};

export default RazorpayPayment;
