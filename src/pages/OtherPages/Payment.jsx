import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaMobileAlt, FaRegCreditCard, FaMoneyCheckAlt } from "react-icons/fa"; // Icons for providers
import { useAuth } from "../auth/AuthContext"; // Import useAuth

const Payment = () => {
  const { isAuthenticated } = useAuth(); // Get the authentication status
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if the user is not authenticated
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, navigate]);

  const [paymentMethod, setPaymentMethod] = useState("mobileMoney");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mobileProvider, setMobileProvider] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
    setMobileProvider(""); // Reset mobile provider on method change
    setPhoneNumber(""); // Clear phone number
    setCardNumber(""); // Clear card details
    setCardExpiry(""); // Clear card expiry
    setCardCVV(""); // Clear card CVV
    setBankAccount(""); // Clear bank account
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Validate fields based on the selected payment method
    if (paymentMethod === "mobileMoney" && (!mobileProvider || !phoneNumber)) {
      setErrorMessage("Please select a Mobile Money provider and enter your mobile number.");
      return;
    }

    if (paymentMethod === "creditCard" && (!cardNumber || !cardExpiry || !cardCVV)) {
      setErrorMessage("Please enter valid credit card details.");
      return;
    }

    if (paymentMethod === "bankTransfer" && !bankAccount) {
      setErrorMessage("Please enter your bank account details.");
      return;
    }

    setIsProcessing(true);
    setErrorMessage("");
    setPaymentStatus("");

    // Simulate payment processing
    setTimeout(() => {
      const paymentSuccessful = Math.random() > 0.2; // 80% success rate
      setIsProcessing(false);
      setPaymentStatus(paymentSuccessful ? "Payment successful! Thank you for your purchase." : "Payment failed. Please try again.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 mt-30">
      <div className="flex justify-center items-center h-full">
        <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">Complete Your Payment</h1>

          {/* Payment Method Selection */}
          <form onSubmit={handlePaymentSubmit} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium text-green-700 mb-2">Payment Method</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="mobileMoney"
                    checked={paymentMethod === "mobileMoney"}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  <FaMobileAlt className="mr-2 text-xl text-green-700" />
                  Mobile Money
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === "creditCard"}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  <FaRegCreditCard className="mr-2 text-xl text-green-700" />
                  Credit Card
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bankTransfer"
                    checked={paymentMethod === "bankTransfer"}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  <FaMoneyCheckAlt className="mr-2 text-xl text-green-700" />
                  Bank Transfer
                </label>
              </div>
            </div>

            {/* Mobile Money Input (with provider selection dropdown) */}
            {paymentMethod === "mobileMoney" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-green-700 mb-2">Select Mobile Money Provider</label>
                  <select
                    value={mobileProvider}
                    onChange={(e) => setMobileProvider(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
                    required
                  >
                    <option value="" disabled>Select Provider</option>
                    <option value="mtn">MTN Mobile Money</option>
                    <option value="vodafone">Vodafone Cash</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-green-700 mb-2">Enter Mobile Number</label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </>
            )}

            {/* Credit Card Input */}
            {paymentMethod === "creditCard" && (
              <>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-green-700 mb-2">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
                    placeholder="Enter your card number"
                    required
                  />
                </div>
                <div className="mb-4 flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-green-700 mb-2">Expiry Date</label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-green-700 mb-2">CVV</label>
                    <input
                      type="text"
                      value={cardCVV}
                      onChange={(e) => setCardCVV(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
                      placeholder="CVV"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            {/* Bank Transfer Input */}
            {paymentMethod === "bankTransfer" && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-green-700 mb-2">Bank Account Number</label>
                <input
                  type="text"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
                  placeholder="Enter your bank account number"
                  required
                />
              </div>
            )}

            {/* Error or Success Message */}
            {errorMessage && <div className="text-red-600 mt-4">{errorMessage}</div>}
            {paymentStatus && <div className="text-green-600 mt-4">{paymentStatus}</div>}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 px-4 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-500"
              disabled={isProcessing}
            >
              {isProcessing ? "Processing..." : "Submit Payment"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
